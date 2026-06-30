import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    workflow: "Research → Planner → Executor → Reviewer",
    agents: 4
  });
}
