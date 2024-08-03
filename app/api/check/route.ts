import { NextResponse } from "next/server";

export async function GET(req: Request) {
    try {
        const userAgent = req.headers.get('user-agent') || '';
        // console.log('hello');

        if (!userAgent.includes('axios') && !userAgent.includes('PostmanRuntime')) {
            // console.log('hello2');
            return new NextResponse(
                JSON.stringify({
                    message: 'Page not found',
                }),
                { status: 404 }
            );
        } else {
            return new NextResponse(
                JSON.stringify({
                    message: 'Welcome to the Home Page',
                }),
                { status: 200 }
            );
        }
    } catch (error) {
        return new NextResponse(
            JSON.stringify({
                message: 'Internal Server Error',
            }),
            { status: 500 }
        );
    }
}