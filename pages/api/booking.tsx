import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const body = req.body;
        res.status(200);
        console.log(body, 'got it api');
    } catch (error) {
        res.status(400);
    }
    res.end()
}
