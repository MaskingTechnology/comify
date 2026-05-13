
import { HttpMethods } from '@theshelf/http';
import type { MappedDriver } from '@theshelf/http';

import { driver } from '^/integrations/http';

import { IMAGES } from './images.fixture';
import { VALUES } from './values.fixture';

function withProfilePictures()
{
    const mappedDriver = driver as MappedDriver;

    mappedDriver.clear();

    const response = new Response(IMAGES.PROFILE, { status: 200, headers: { 'Content-Type': 'image/jpeg', 'Content-Length': '95' } });

    mappedDriver.setMapping(HttpMethods.HEAD, VALUES.PICTURES.VALID, response);
    mappedDriver.setMapping(HttpMethods.GET, VALUES.PICTURES.VALID, response);
}

export const HTTP_CLIENTS = { withProfilePictures };
