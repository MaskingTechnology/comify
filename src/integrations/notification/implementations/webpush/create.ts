
import WebPush from './WebPush.js';

const DEFAULT_VAPID_SUBJECT = 'development';
const DEFAULT_VAPID_PUBLIC_KEY = 'development';
const DEFAULT_VAPID_PRIVATE_KEY = 'development';

export default function create(): WebPush
{
    const subject = process.env.WEBPUSH_SUBJECT ?? DEFAULT_VAPID_SUBJECT;
    const publicKey = process.env.WEBPUSH_PUBLIC_KEY ?? DEFAULT_VAPID_PUBLIC_KEY;
    const privateKey = process.env.WEBPUSH_PRIVATE_KEY ?? DEFAULT_VAPID_PRIVATE_KEY;

    return new WebPush({ subject, publicKey, privateKey });
}
