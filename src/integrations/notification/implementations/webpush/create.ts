
import WebPush from './WebPush.js';

export default function create(): WebPush
{
    const subject = process.env.WEBPUSH_SUBJECT ?? 'undefined';
    const publicKey = process.env.WEBPUSH_PUBLIC_KEY ?? 'undefined';
    const privateKey = process.env.WEBPUSH_PRIVATE_KEY ?? 'undefined';

    return new WebPush({ subject, publicKey, privateKey });
}
