
import { HttpMethods } from '@theshelf/http';
import type { MappedDriver } from '@theshelf/http';

import { driver } from '^/integrations/http';

import { RESPONSES } from './responses.fixture';
import { URLS } from './urls.fixture';

function withImages()
{
    const mappedDriver = driver as MappedDriver;

    mappedDriver.clear();

    mappedDriver.setMapping(HttpMethods.HEAD, URLS.VALID, RESPONSES.VALID);
    mappedDriver.setMapping(HttpMethods.GET, URLS.VALID, RESPONSES.VALID);
    mappedDriver.setMapping(HttpMethods.HEAD, URLS.INVALID_TYPE, RESPONSES.INVALID_TYPE);
    mappedDriver.setMapping(HttpMethods.HEAD, URLS.INVALID_SIZE, RESPONSES.INVALID_SIZE);
    mappedDriver.setMapping(HttpMethods.HEAD, URLS.NONEXISTING, RESPONSES.NONEXISTING);
}

export const HTTP_CLIENTS = { withImages };
