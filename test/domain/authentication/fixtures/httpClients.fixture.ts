
import { HttpMethods } from '@theshelf/http';

import httpClient from '^/integrations/http';

import { IMAGES } from './images.fixture';
import { VALUES } from './values.fixture';

function withProfilePictures()
{
    httpClient.clearCache();

    const response = new Response(IMAGES.PROFILE, { status: 200, headers: { 'Content-Type': 'image/jpeg', 'Content-Length': '95' } });

    httpClient.setCache(HttpMethods.HEAD, VALUES.PICTURES.VALID, response);
    httpClient.setCache(HttpMethods.GET, VALUES.PICTURES.VALID, response);

    return httpClient;
}

export const HTTP_CLIENTS = { withProfilePictures };
