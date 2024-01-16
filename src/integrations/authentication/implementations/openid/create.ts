
import OpenID from './OpenID.js';

const DEFAULT_ISSUER = 'https://accounts.google.com';
const DEFAULT_CLIENT_ID = 'development';
const DEFAULT_CLIENT_SECRET = 'development';
const DEFAULT_REDIRECT_URI = 'http://localhost:3000/rpc/login';

export default function create(): OpenID
{
    const issuer = process.env.OPENID_ISSUER ?? DEFAULT_ISSUER;
    const clientId = process.env.OPENID_CLIENT_ID ?? DEFAULT_CLIENT_ID;
    const clientSecret = process.env.OPENID_CLIENT_SECRET ?? DEFAULT_CLIENT_SECRET;
    const redirectUri = process.env.OPENID_REDIRECT_URI ?? DEFAULT_REDIRECT_URI;

    return new OpenID({ issuer, clientId, clientSecret, redirectUri });
}
