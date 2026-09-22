import { NextRequest, NextResponse } from "next/server"
import { revalidateTag } from "next/cache"

export async function POST(request) {
  revalidateTag("sanity", "max")
  return NextResponse.json({ msg: "Revalidated" })
}