
import httpClient, { HTTP_METHODS } from '^/integrations/http';

import { IMAGES } from './images.fixture';
import { VALUES } from './values.fixture';

function withProfilePictures()
{
    httpClient.clearCache();

    const response = new Response(IMAGES.PROFILE, { status: 200, headers: { 'Content-Type': 'image/jpeg', 'Content-Length': '95' } });

    httpClient.setCache(HTTP_METHODS.HEAD, VALUES.PICTURES.VALID, response);
    httpClient.setCache(HTTP_METHODS.GET, VALUES.PICTURES.VALID, response);

    return httpClient;
}

export const HTTP_CLIENTS = { withProfilePictures };
