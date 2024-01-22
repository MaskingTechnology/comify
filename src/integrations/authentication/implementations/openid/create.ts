
import OpenID from './OpenID.js';

export default function create(): OpenID
{
    const issuer = process.env.OPENID_ISSUER ?? 'undefined';
    const clientId = process.env.OPENID_CLIENT_ID ?? 'undefined';
    const clientSecret = process.env.OPENID_CLIENT_SECRET ?? 'undefined';
    const redirectUri = process.env.OPENID_REDIRECT_URI ?? 'undefined';

    return new OpenID({ issuer, clientId, clientSecret, redirectUri });
}
