import { NextRequest, NextResponse } from 'next/server';

const checkWebSocketConnection = (): boolean => {
    return false;
};

export function middleware(req: NextRequest) {
    const url = new URL(req.url);
    const pathname = url.pathname;

    console.log(`Requested URL: ${req.url}`);

    if (pathname === '/') {
        const isWebSocketConnected = checkWebSocketConnection();
        console.log(`WebSocket connected: ${isWebSocketConnected}`);

        if (!isWebSocketConnected) {
            return NextResponse.rewrite(new URL('/404', req.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: '/',
};
