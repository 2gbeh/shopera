import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const keyword = searchParams.get("q");
  // //
  // const res = await fetch("https://data.mongodb-api.com/...", {
  //   headers: {
  //     "Content-Type": "application/json",
  //     "API-Key": process.env.DATA_API_KEY!,
  //   },
  // });
  // const data = await res.json();

  return Response.json({ data: [keyword ?? 0] });
}

export async function POST(request: NextRequest) {
  // const res = await fetch("https://data.mongodb-api.com/...", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //     "API-Key": process.env.DATA_API_KEY!,
  //   },
  //   body: JSON.stringify({ time: new Date().toISOString() }),
  // });

  // const data = await res.json();

  // return Response.json(data);

  return Response.json({ data: [123] });
}
