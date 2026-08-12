
import { DATA_URLS } from '../../post/fixtures';

export const FILES: Record<string, Buffer> =
{
    IMAGE: Buffer.from(DATA_URLS.IMAGE_DATA, 'base64')
};
