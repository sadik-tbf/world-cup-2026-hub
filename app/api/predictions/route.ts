import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ message: 'Load saved predictions from Firestore or local storage integration.' });
}
