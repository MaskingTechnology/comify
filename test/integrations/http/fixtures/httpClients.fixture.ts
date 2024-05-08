
import Client from '^/integrations/http/Client';
import { HTTP_METHODS } from '^/integrations/http/definitions/constants';

import { implementation } from './implementation.mock';
import { RESPONSES } from './responses.fixture';
import { URLS } from './urls.fixture';

export const httpClient = new Client(implementation);

function withCache(): void
{
    httpClient.clearCache();

    httpClient.setCache(HTTP_METHODS.GET, URLS.CACHED, RESPONSES.CACHED);
    httpClient.setCache(HTTP_METHODS.POST, URLS.CACHED, RESPONSES.CACHED);
    httpClient.setCache(HTTP_METHODS.PUT, URLS.CACHED, RESPONSES.CACHED);
    httpClient.setCache(HTTP_METHODS.PATCH, URLS.CACHED, RESPONSES.CACHED);
    httpClient.setCache(HTTP_METHODS.DELETE, URLS.CACHED, RESPONSES.CACHED);
    httpClient.setCache(HTTP_METHODS.HEAD, URLS.CACHED, RESPONSES.CACHED);
}

export const HTTP_CLIENTS = { withCache };
