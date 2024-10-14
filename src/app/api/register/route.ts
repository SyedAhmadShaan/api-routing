import { registerSchema } from "@/lib/validation/schema";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsedData = registerSchema.parse(body);

    return NextResponse.json({
      message: "User registered sucessfully",
      parsedData,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { message: "Something went wrong from zodError", errors: error.errors },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { message: "Something went wrong", error },
      { status: 400 }
    );
  }
}
