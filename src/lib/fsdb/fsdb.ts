import {
  type TList,
  type TDocument,
  type TCollection,
  EFsdbError as E,
  getUuid as uuid,
  getDatetime as ts,
} from "./fsdb.service";

// import Fsdb from '@/lib/fsdb/fsdb';
// const User = new Fsdb(fakeUsers);
// const users = User.select<undefined, TUser>();
export default class Fsdb {
  constructor(private data: TCollection) {}

  private uniqueFieldsException<A>(obj: A, keys?: TList) {
    if (keys) {
      let condition = false;
      let [i, j, k] = ["", "", ""];
      let rest: TList;
      //
      switch (keys.length) {
        case 3:
          [i, j, k] = keys;
          condition =
            this.selectWhere<TDocument, A[]>({
              [i]: (obj as TDocument)[i],
            }).length > 0 &&
            this.selectWhere<TDocument, A[]>({
              [j]: (obj as TDocument)[j],
            }).length > 0 &&
            this.selectWhere<TDocument, A[]>({
              [k]: (obj as TDocument)[k],
            }).length > 0;
          break;
        case 2:
          [i, j] = keys;
          condition =
            this.selectWhere<TDocument, A[]>({
              [i]: (obj as TDocument)[i],
            }).length > 0 &&
            this.selectWhere<TDocument, A[]>({
              [j]: (obj as TDocument)[j],
            }).length > 0;
          break;
        default:
          [i, ...rest] = keys;
          condition =
            this.selectWhere<TDocument, A[]>({
              [i]: (obj as TDocument)[i],
            }).length > 0;
      }
      //
      if (condition)
        throw new Error(`${E.DUPLICATE_ENTRY} :${keys.join(" :")}`);
    }
  }

  // POST resource/
  // { name: "Jack Doe", email: "jack@email.com", password: "password" }, ['email']
  insert<A, R>(formData: A, uniqueKeys?: TList): R {
    // check for duplicates
    this.uniqueFieldsException<A>(formData, uniqueKeys);
    //
    let [id, created_at] = [uuid(), ts()];
    let obj: TDocument = {
      ...formData,
      created_at,
      id,
    };
    this.data.push(obj);
    //
    return obj as R;
  }

  // GET resource/ | resource/:id
  select<A, R>(id?: A): R {
    if (id) {
      let obj = this.data.find((e: TDocument) => e?.id == id);
      if (!obj) throw new Error(E.NOT_FOUND);
      return obj as R;
    }
    //
    return this.data as R;
  }

  // GET resource/?queryKey=:queryValue
  // { email: "john@email.com" }
  selectWhere<A, R>(queryObject: A): R {
    let key = Object.keys(queryObject as TDocument).pop() as string;
    let arr = this.data.filter(
      (e: TDocument) => e[key] == (queryObject as TDocument)[key],
    );
    //
    return arr as R;
  }

  // PATCH resource/
  // 1, { password: "passworded" }, ['email']
  update<A1, A2, R>(id: A1, formData: A2, uniqueKeys?: TList): R {
    // check id exist
    this.select<A1, R>(id);
    // check for duplicates
    this.uniqueFieldsException<A2>(formData, uniqueKeys);
    //
    this.data.forEach((e: TDocument, i: number, arr: TCollection) => {
      if (e?.id && e.id == id) {
        arr[i] = { ...e, ...formData, updated_at: ts() };
      }
    });
    //
    return this.select<A1, R>(id);
  }

  trash<A, R>(id: A): R {
    // check id exist
    this.select<A, R>(id);
    //
    this.data.forEach((e: TDocument, i: number, arr: TCollection) => {
      if (e?.id && e.id == id) {
        arr[i] = { ...e, deleted_at: ts() };
      }
    });
    //
    return this.select<A, R>(id);
  }

  restore<A, R>(id: A): R {
    // check id exist
    this.select<A, R>(id);
    //
    this.data.forEach((e: TDocument, i: number, arr: TCollection) => {
      if (e?.id && e.id == id) {
        arr[i] = { ...e, deleted_at: null };
      }
    });
    //
    return this.select<A, R>(id);
  }

  delete<A, R>(id: A): R {
    let deletedObject = this.select<A, R>(id);
    this.data = this.data.filter((e: TDocument) => e?.id != id);
    //
    return deletedObject as R;
  }
}
