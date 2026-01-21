import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { service_id, template_id, user_id, template_params } = body;

        // Verify private key is available on server
        const privateKey = process.env.EMAILJS_PRIVATE_KEY;
        if (!privateKey) {
            console.error('EMAILJS_PRIVATE_KEY is not set in environment variables');
            return NextResponse.json(
                { error: 'Server configuration error: Missing Private Key' },
                { status: 500 }
            );
        }

        console.log('Sending email with Service ID:', service_id, 'and User ID:', user_id);

        const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                service_id,
                template_id,
                user_id,
                accessToken: privateKey, // Use Private Key for authentication
                template_params,
            }),
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('EmailJS API Error:', errorText);
            return NextResponse.json(
                { error: `EmailJS Provider Error: ${errorText}` },
                { status: response.status }
            );
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Email API Route Error:', error);
        return NextResponse.json(
            { error: 'Internal server error processing email request' },
            { status: 500 }
        );
    }
}
