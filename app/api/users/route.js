import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const users = await response.json();
    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json(
      { error: error.message || 'Something went wrong' },
      { status: 500 }
    );
  }
}
