import { NextResponse } from 'next/server';
import { deleteSession } from '@/lib/sessions';

export async function POST() {
  await deleteSession();
  return NextResponse.json({ success: true });
}