
import { beforeEach, describe, expect, it } from 'vitest';

import download from '^/domain/image/download';
import ImageNotDownloaded from '^/domain/image/errors/ImageNotDownloaded';
import InvalidImage from '^/domain/image/errors/InvalidImage';

import fileStore from '^/integrations/filestore/module';

import { DATABASES, FILE_STORES, HTTP_CLIENTS, URLS } from './fixtures';

HTTP_CLIENTS.withImages();

beforeEach(async () =>
{
    HTTP_CLIENTS.withImages();

    await Promise.all([
        DATABASES.empty(),
        FILE_STORES.empty()
    ]);
});

describe('domain/image/download', () =>
{
    it('should download an image', async () =>
    {
        const image = await download('test', URLS.VALID);
        const data = await fileStore.readFile(image.storageKey);

        expect(image.filename).toEqual('image.jpg');
        expect(image.mimeType).toEqual('image/jpeg');
        expect(image.storageKey).toContain('test/');
        expect(data.length).toEqual(95);
    });

    it('should fail to download an non-existing image', async () =>
    {
        const promise = download('test', URLS.NONEXISTING);

        await expect(promise).rejects.toStrictEqual(new ImageNotDownloaded());
    });

    it('should fail to download an image with an invalid type', async () =>
    {
        const promise = download('test', URLS.INVALID_TYPE);

        await expect(promise).rejects.toStrictEqual(new InvalidImage('Invalid field(s): mimeType'));
    });

    it('should fail to download an image that is to large', async () =>
    {
        const promise = download('test', URLS.INVALID_SIZE);

        await expect(promise).rejects.toStrictEqual(new InvalidImage('Invalid field(s): size'));
    });
});
