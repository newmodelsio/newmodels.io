// "use server"

import { NextResponse } from "next/server"
import { revalidatePath } from "next/cache"
import { revalidateTag } from "next/cache"

export async function GET(request) {
  revalidateTag("kirby")
  return NextResponse.json({ msg: "Hello from server" })
}
