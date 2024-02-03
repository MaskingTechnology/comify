
import RequesterMiddleware from './middlewares/RequesterMiddleware';

const queryParameters = new URLSearchParams(globalThis.location?.search);
const key = queryParameters.get('key') ?? undefined;
const authorization = key !== undefined ? `Bearer ${key}` : undefined;

export default new RequesterMiddleware(authorization);
