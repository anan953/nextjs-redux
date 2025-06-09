import { NextResponse } from 'next/server';

export async function POST() {
  // Create response
  const response = NextResponse.json({ success: true });

  // Delete the token cookie
  response.cookies.delete('token');

  return response;
}
