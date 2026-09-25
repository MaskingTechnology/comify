
import { HttpMethods, type MappedDriver } from '@theshelf/http';

import { driver } from '@comify/common/integrations/http';

import { IMAGE_URLS, IMAGE_DATA_URLS } from '../data';

const mappedDriver = driver as MappedDriver;

function seed(url: string, response: Response): void
{
    mappedDriver.setMapping(HttpMethods.HEAD, url, response);
    mappedDriver.setMapping(HttpMethods.GET, url, response);
}

export async function seedImages(): Promise<void>
{
    mappedDriver.clear();

    const status = 200;
    const headers = { 'Content-Type': 'image/jpeg', 'Content-Length': String(IMAGE_DATA_URLS.PROFILE.length) };

    const url = IMAGE_URLS.PROFILE.toString();
    const response = new Response(IMAGE_DATA_URLS.PROFILE, { status, headers });

    seed(url, response);
}
