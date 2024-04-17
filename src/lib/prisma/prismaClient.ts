// npx prisma migrate dev --name init
import { Prisma, PrismaClient } from "@prisma/client";
export { Prisma } from "@prisma/client";
export * as prismaUtils from "./prismaUtils";

const prismaClient = new PrismaClient();

export default prismaClient;

export type TId = string | number;

export type TDocument = Record<string, unknown>;

export type TCollection = TDocument[];

export type TPrismaClientError =
  | Prisma.PrismaClientKnownRequestError
  | Prisma.PrismaClientUnknownRequestError
  | Prisma.PrismaClientRustPanicError
  | Prisma.PrismaClientInitializationError
  | Prisma.PrismaClientValidationError;

export interface IZodError {
  issues: TCollection;
  name: "ZodError";
}

