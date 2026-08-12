
import { DATA_URLS } from './dataUrls.fixture';

export const FILES: Record<string, Buffer> =
{
    IMAGE: Buffer.from(DATA_URLS.IMAGE_DATA, 'base64')
};
