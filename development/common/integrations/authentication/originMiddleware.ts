
import { OriginMiddleware } from '@jitar-plugins/http';

const options = {
    sameSite: process.env.ORIGIN_COOKIE_SAME_SITE || 'Strict',
    secure: process.env.ORIGIN_COOKIE_SECURE === 'true'
}

export default new OriginMiddleware(options);
