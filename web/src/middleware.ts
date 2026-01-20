import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
    // Middleware is disabled - authentication is handled by page layouts
    // This prevents redirect loops and cookie name issues
    return NextResponse.next();
}

export const config = {
    matcher: [
        '/admin/:path*',
    ],
};
