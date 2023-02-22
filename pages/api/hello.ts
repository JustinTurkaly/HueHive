import { NextApiRequest, NextApiResponse } from 'next';
import { testFunc } from '../controllers/testFunc';

export default function exampleApi(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    testFunc('username');
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
