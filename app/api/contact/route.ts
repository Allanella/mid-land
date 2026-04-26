import { NextRequest, NextResponse } from 'next/server';

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  submittedDate: string;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.subject || !body.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create message object
    const contactMessage: ContactMessage = {
      id: `MSG-${Date.now()}`,
      name: body.name,
      email: body.email,
      phone: body.phone || '',
      subject: body.subject,
      message: body.message,
      submittedDate: new Date().toISOString(),
    };

    // In a real application, you would:
    // 1. Save to database
    // 2. Send email notification to school
    // 3. Send confirmation email to user
    
    console.log('Contact message received:', contactMessage);

    return NextResponse.json(
      {
        success: true,
        messageId: contactMessage.id,
        message: 'Thank you for your message. We will get back to you shortly.',
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to process message' },
      { status: 500 }
    );
  }
}
