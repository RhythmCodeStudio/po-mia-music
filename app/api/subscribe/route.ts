import { NextResponse } from "next/server";
import { saveSubscriptionToDB } from "@/lib/notification-subscriptions-db";

export async function POST(req: Request) {
  const sub = await req.json();
  saveSubscriptionToDB(sub);
  return NextResponse.json({ success: true });
}