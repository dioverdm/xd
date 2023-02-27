import { deleteCookie, getCookie, setCookie } from 'cookies-next';
import { NextApiRequest, NextApiResponse } from 'next';
import { CLIENT_ID, CLIENT_SECRET } from 'pages/api/auth/login';

const TokenCookie = 'ts-token';

export type AccessToken = {
  access_token: string;
  token_type: 'Bearer';
  expires_in: number;
  refresh_token: string;
  scope: string;
};

export function getServerSession(req: NextApiRequest, res: NextApiResponse) {
  const raw = getCookie(TokenCookie, { req, httpOnly: true }) as string;
  if (raw == null) return null;

  return JSON.parse(raw) as AccessToken;
}

export function setServerSession(req: NextApiRequest, res: NextApiResponse, data: AccessToken) {
  setCookie(TokenCookie, data, { req, res, httpOnly: true });
}

export async function removeSession(req: NextApiRequest, res: NextApiResponse) {
  const session = getServerSession(req, res);

  if (session != null) {
    deleteCookie(TokenCookie, { req, res, httpOnly: true });
    await revokeToken(session.access_token);
  }
}

async function revokeToken(accessToken: string) {
  const data = {
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    token: accessToken,
  };

  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
  };

  await fetch(`https://discord.com/api/oauth2/token/revoke`, {
    headers,
    body: new URLSearchParams(data),
    method: 'POST',
  });
}
