import { NextResponse } from "next/server";
import { Prisma } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";
import { IZodError } from "./prismaClient";
//
export const getUuid = () => uuidv4();

export const getDatetime = () => new Date().toJSON();

export const getTimestamp = () => new Date();

export const hasQuery = (query: unknown) =>
  query && query.toString().trim().length > 0;

export function response(result: unknown, status = 200) {
  const isSuccess = status < 400;
  let error = "";

  // ZodError
  if ((result as IZodError).name === "ZodError") {
    let messages: string[] = [];
    (result as IZodError).issues.map(({ message }) =>
      messages.push(message as string)
    );
    error = messages.join("; ");
    return response(`ZodError: ${error}`, 422);
  }

  // PrismaClientError
  if (
    result instanceof Prisma.PrismaClientKnownRequestError ||
    result instanceof Prisma.PrismaClientUnknownRequestError ||
    result instanceof Prisma.PrismaClientRustPanicError ||
    result instanceof Prisma.PrismaClientInitializationError ||
    result instanceof Prisma.PrismaClientValidationError
  ) {
    error = result.message.replace(/\r?\n|\r/g, "");
    error = error.split("invocation:")?.[1];
    return response(`PrismaClientError: ${error}`, 422);
  }

  //
  return NextResponse.json(
    {
      success: isSuccess,
      [isSuccess ? "data" : "message"]: result,
    },
    { status }
  );
}
