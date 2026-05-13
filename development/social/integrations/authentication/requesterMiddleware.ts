
import { RequesterMiddleware } from '@jitar-plugins/authentication/client';

const key = new URLSearchParams(globalThis.location?.search).get('key');
const authorization = key !== null ? `Bearer ${key}` : undefined;

export default new RequesterMiddleware(authorization);
