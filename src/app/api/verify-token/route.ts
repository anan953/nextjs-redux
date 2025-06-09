import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get('token')?.value;

    if (!token) {
      return NextResponse.json({ error: 'No token provided' }, { status: 401 });
    }

    // TODO: Add your actual token verification logic here
    // This is just a mock implementation
    if (token === 'mock-jwt-token') {
      const user = {
        id: '1',
        username: 'admin',
        email: 'admin@example.com',
      };
      return NextResponse.json({ user });
    }

    return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
  } catch (error) {
    console.error('Token verification error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
