import type { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

export async function GET(req: NextApiRequest, res: NextApiResponse) {
    const { key } = req.query;

    if (typeof key === 'string') {
        return NextResponse.redirect('/?key=' + encodeURIComponent(key));
    }

    return res.status(400).json({ error: 'Missing key parameter' });
}
