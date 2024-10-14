import { loginSchema } from "@/lib/validation/schema";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsedData = loginSchema.parse(body);

    return NextResponse.json({ message: "User Login API", parsedData });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          message: "Something Went Wrong",
          error: error.errors,
        },
        { status: 400 }
      );
    }
    NextResponse.json(
      { message: "Something went wrong", error },
      { status: 400 }
    );
  }
}
