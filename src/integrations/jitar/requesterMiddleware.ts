
import { getQueryParameter } from '../utilities/webbrowser';
import RequesterMiddleware from './middlewares/RequesterMiddleware';

const key = getQueryParameter('key');
const authorization = key !== undefined ? `Bearer ${key}` : undefined;

export default new RequesterMiddleware(authorization);
