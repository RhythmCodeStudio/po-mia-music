import { NextResponse } from "next/server";
import { saveSubscription } from "@/lib/push-notification-subscriptions";

export async function POST(req: Request) {
  const sub = await req.json();
  saveSubscription(sub);
  return NextResponse.json({ success: true });
}