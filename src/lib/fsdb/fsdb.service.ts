import { v4 as uuidv4 } from "uuid";

export type TList = string[];

export type TDocument = Record<string, unknown>;

export type TCollection = TDocument[];

export enum EFsdbError {
  NOT_FOUND = "EFsdbError: Not Found",
  DUPLICATE_ENTRY = "EFsdbError: Duplicate Entry",
}

export const mockData = [
  {
    name: "John Doe",
    email: "john@email.com",
    password: "password",
    // 
    created_at: "2018-08-31T13:39:59.676Z",
    updated_at: null,
    deleted_at: null,
    id: "bbdf9b7ef75ab372bc0c79e9",
  },
  {
    name: "Jane Doe",
    email: "jane@email.com",
    password: "password",
    // 
    created_at: "2000-01-05T09:12:53.259Z",
    updated_at: null,
    deleted_at: null,
    id: "ef21a6f3b409a5deb62f9de4",
  },
];

export const getUuid = () => uuidv4();

export const getDatetime = () => new Date().toJSON();

