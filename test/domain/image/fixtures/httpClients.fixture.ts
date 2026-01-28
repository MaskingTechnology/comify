
import { HttpMethods } from '@theshelf/http';

import httpClient from '^/integrations/http';

import { RESPONSES } from './responses.fixture';
import { URLS } from './urls.fixture';

function withImages()
{
    httpClient.clearCache();

    httpClient.setCache(HttpMethods.HEAD, URLS.VALID, RESPONSES.VALID);
    httpClient.setCache(HttpMethods.GET, URLS.VALID, RESPONSES.VALID);
    httpClient.setCache(HttpMethods.HEAD, URLS.INVALID_TYPE, RESPONSES.INVALID_TYPE);
    httpClient.setCache(HttpMethods.HEAD, URLS.INVALID_SIZE, RESPONSES.INVALID_SIZE);
    httpClient.setCache(HttpMethods.HEAD, URLS.NONEXISTING, RESPONSES.NONEXISTING);
}

export const HTTP_CLIENTS = { withImages };
