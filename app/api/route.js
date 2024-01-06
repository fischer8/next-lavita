import { NextResponse } from "next/server";

export async function POST() {
    const res = await fetch("/api/data")
          .then((res) => res.json())
  return NextResponse.json('jones')
}
