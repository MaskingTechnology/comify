
import httpClient, { HTTP_METHODS } from '^/integrations/http/module';

import { RESPONSES } from './responses.fixture';
import { URLS } from './urls.fixture';

function withImages()
{
    httpClient.clearCache();

    httpClient.setCache(HTTP_METHODS.HEAD, URLS.VALID, RESPONSES.VALID);
    httpClient.setCache(HTTP_METHODS.GET, URLS.VALID, RESPONSES.VALID);
    httpClient.setCache(HTTP_METHODS.HEAD, URLS.INVALID_TYPE, RESPONSES.INVALID_TYPE);
    httpClient.setCache(HTTP_METHODS.HEAD, URLS.INVALID_SIZE, RESPONSES.INVALID_SIZE);
    httpClient.setCache(HTTP_METHODS.HEAD, URLS.NONEXISTING, RESPONSES.NONEXISTING);
}

export const HTTP_CLIENTS = { withImages };
