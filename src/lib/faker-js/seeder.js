"use strict";
import FakerPost from "./model/Post.js";
import customSchema, { customSchemaSize } from "./schema/customSchema.js";

export default class Seeder extends FakerPost {
  log = (args) => console.log(JSON.stringify(args));

  seed = (schema, size) =>
    size > 1 ? this.factory(schema, size) : this.factory(schema, 1).pop();

  factory(schema, size = 10, asObject = false) {
    let [arr, obj] = [[], {}];
    for (let i = 0; i < size; i++) {
      Object.entries(schema).map(([key, callback]) => {
        let value;
        switch (typeof callback) {
          case "string":
            value =
              callback.charAt(0) === "#" ? callback.slice(1) : this[callback];
            break;
          case "object":
            value = callback ? this.factory(callback, 1).pop() : null;
            break;
          case "function":
            value = callback();
            break;
          default:
            value = callback;
        }
        obj[key] = value;
      });
      arr.push(obj);
      obj = {};
    }
    return asObject ? arr.pop() : arr;
  }

  hasId = () => customSchema?.id === "id";

  // ////////////////////////////////////////////////////////////////////
  get getDocument() {
    return this.hasId()
      ? { ...this.seed(customSchema, 1), id: 1 }
      : this.seed(customSchema, 1);
  }

  get getCollection() {
    let arr = this.seed(customSchema, customSchemaSize ?? 25);
    if (this.hasId()) {
      arr.forEach((e, i) => (e["id"] = i + 1));
    }
    return arr;
  }
}
