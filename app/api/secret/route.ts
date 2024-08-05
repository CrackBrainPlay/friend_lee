import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        const { key } = req.query;

        if (typeof key === 'string') {
            res.status(200).json({ url: `/?key=${encodeURIComponent(key)}` });
        } else {
            res.status(400).json({ error: 'Missing key parameter' });
        }
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
