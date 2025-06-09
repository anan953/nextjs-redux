import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { LoginCredentials } from '@/types/auth';

export async function POST(request: NextRequest) {
  try {
    const body: LoginCredentials = await request.json();
    const { username, password } = body;

    // TODO: Replace this with your actual authentication logic
    // This is just a mock implementation
    if (username === 'admin' && password === 'password') {
      const token = 'mock-jwt-token'; // In real app, generate a proper JWT token
      const user = {
        id: '1',
        username: 'admin',
        email: 'admin@example.com',
      };

      // Create response with user data
      const response = NextResponse.json({ user });

      // Set token in HTTP-only cookie
      response.cookies.set('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60 * 24 * 7, // 1 week
      });

      return response;
    }

    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
