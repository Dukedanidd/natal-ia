import { NextResponse } from "next/server";
import User from "@/models/User";

export async function GET() {
  try {
    const users = await User.find({})
      .select("name email createdAt updatedAt lastLogin role")
      .sort({ createdAt: -1 });

    return NextResponse.json({ data: users });
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json(
      { error: "Error fetching users" },
      { status: 500 }
    );
  }
}
