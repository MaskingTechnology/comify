
import { getQueryParameter } from '^/integrations/utilities/webbrowser';

import { RequesterMiddleware } from '@jitar-plugins/authentication/client';

const key = getQueryParameter('key');
const authorization = key !== undefined ? `Bearer ${key}` : undefined;

export default new RequesterMiddleware(authorization);
