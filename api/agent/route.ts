import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({
    id: "agent-001",
    status: "running",
    cognition: "BDI"
  });
}
