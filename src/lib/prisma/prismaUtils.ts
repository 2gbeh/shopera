import { NextResponse } from "next/server";
import { Prisma } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";
import { IZodError } from "./prismaClient";
//
export const getUuid = () => uuidv4();

export const getDatetime = () => new Date().toJSON();

export function response(result: unknown, status = 200) {
  const isSuccess = status < 400;

  // ZodError
  if ((result as IZodError).name === "ZodError") {
    let messages: string[] = [];
    (result as IZodError).issues.map(({ message }) =>
      messages.push(message as string)
    );
    return response("ZodError: " + messages.join("; "), status);
  }

  // PrismaClientError
  if (
    result instanceof Prisma.PrismaClientKnownRequestError ||
    result instanceof Prisma.PrismaClientUnknownRequestError ||
    result instanceof Prisma.PrismaClientRustPanicError ||
    result instanceof Prisma.PrismaClientInitializationError ||
    result instanceof Prisma.PrismaClientValidationError
  ) {
    return response("PrismaClientError: " + result.message, status);
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