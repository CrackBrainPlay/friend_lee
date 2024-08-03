import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
    const userAgent = req.headers.get('user-agent') || '';

    if (!userAgent.includes('axios') && !userAgent.includes('PostmanRuntime')) {
        return NextResponse.redirect(new URL('/404', req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: '/',
};