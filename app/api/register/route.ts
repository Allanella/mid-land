import { writeFile, readFile } from 'fs/promises';
import { join } from 'path';
import { NextRequest, NextResponse } from 'next/server';

interface Registration {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  parentName: string;
  parentEmail: string;
  parentPhone: string;
  currentForm: string;
  address: string;
  dateOfBirth: string;
  studentType: 'local' | 'international';
  tuitionFee: number;
  currency: string;
  registrationDate: string;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    if (
      !body.firstName ||
      !body.lastName ||
      !body.email ||
      !body.phone ||
      !body.parentName ||
      !body.parentEmail
    ) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const registrationsPath = join(process.cwd(), 'data', 'registrations.json');

    // Read existing registrations
    let registrations: Registration[] = [];
    try {
      const data = await readFile(registrationsPath, 'utf-8');
      const parsed = JSON.parse(data);
      registrations = parsed.registrations || [];
    } catch (error) {
      // File doesn't exist yet, start with empty array
      registrations = [];
    }

    // Create new registration
    const newRegistration: Registration = {
      id: `REG-${Date.now()}`,
      ...body,
      registrationDate: new Date().toISOString(),
    };

    registrations.push(newRegistration);

    // Write back to file
    await writeFile(
      registrationsPath,
      JSON.stringify({ registrations }, null, 2),
      'utf-8'
    );

    // In a real application, you would:
    // 1. Send a confirmation email to the student and parent
    // 2. Store in a real database
    // 3. Create a payment invoice if needed

    return NextResponse.json(
      {
        success: true,
        registrationId: newRegistration.id,
        message: 'Registration submitted successfully. We will contact you shortly.',
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { error: 'Failed to process registration' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const registrationsPath = join(process.cwd(), 'data', 'registrations.json');
    const data = await readFile(registrationsPath, 'utf-8');
    const parsed = JSON.parse(data);
    return NextResponse.json(parsed.registrations || []);
  } catch (error) {
    return NextResponse.json([], { status: 200 });
  }
}
