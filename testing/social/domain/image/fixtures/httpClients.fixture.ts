
import { HttpMethods } from '@theshelf/http';
import type { MappedDriver } from '@theshelf/http';

import { driver } from '@comify/common/integrations/http';

import { RESPONSES } from './responses.fixture';
import { URLS } from './urls.fixture';

function withImages()
{
    const mappedDriver = driver as MappedDriver;

    mappedDriver.clear();

    mappedDriver.setMapping(HttpMethods.HEAD, URLS.VALID.toString(), RESPONSES.VALID);
    mappedDriver.setMapping(HttpMethods.GET, URLS.VALID.toString(), RESPONSES.VALID);
    mappedDriver.setMapping(HttpMethods.HEAD, URLS.INVALID_TYPE.toString(), RESPONSES.INVALID_TYPE);
    mappedDriver.setMapping(HttpMethods.HEAD, URLS.INVALID_SIZE.toString(), RESPONSES.INVALID_SIZE);
    mappedDriver.setMapping(HttpMethods.HEAD, URLS.NONEXISTING.toString(), RESPONSES.NONEXISTING);
}

export const HTTP_CLIENTS = { withImages };
