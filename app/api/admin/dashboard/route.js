import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/libs/next-auth";
import User from "@/models/User";

// This route is used to get data for the admin dashboard
export async function GET(req) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (session.user.role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Get all users count
  const usersCount = await User.countDocuments();
  const stats = {
    usersCount,
  };

  return NextResponse.json({ data: stats });
}
