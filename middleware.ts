import { NextResponse, NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
    const url = req.nextUrl.clone();

    // Проверяем, если запрос к корневому URL
    if (url.pathname === '/') {
        // Отправляем ответ с кодом 404 и соответствующим контентом
        return NextResponse.rewrite(new URL('/not-found', req.url));
    }

    return NextResponse.next();
}

// Указываем, к каким путям применяется Middleware
export const config = {
    matcher: ['/'],
};