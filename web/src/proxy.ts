import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function proxy(request: NextRequest) {
    // Middleware is disabled - authentication is handled by page layouts
    // This prevents redirect loops and cookie name issues
    return NextResponse.next();
}

export const config = {
    matcher: [
        '/admin/:path*',
    ],
};
