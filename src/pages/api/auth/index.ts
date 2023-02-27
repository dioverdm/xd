import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'utils/auth/cookie';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = getServerSession(req, res);

  if (session == null) {
    res.status(401).json('You must login first');
    return;
  }

  res.status(200).json(session);
}
