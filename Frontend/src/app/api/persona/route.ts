import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { userId, persona } = body;

    return NextResponse.json({ 
      success: true, 
      message: 'Persona selected successfully',
      data: { userId, persona }
    });
  } catch (error) {
    console.error('Error in persona selection:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to save persona selection' },
      { status: 500 }
    );
  }
} 