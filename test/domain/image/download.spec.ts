
import { beforeEach, describe, expect, it } from 'vitest';

import { RECORD_TYPE } from '^/domain/image';
import download, { ImageNotDownloaded } from '^/domain/image/download';
import InvalidImage from '^/domain/image/validate/InvalidImage';

import database from '^/integrations/database/module';
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
        const imageId = await download('test', URLS.VALID);
        const image = await database.readRecord(RECORD_TYPE, imageId);
        const data = await fileStore.readFile(image.storageKey as string);

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
        const messages = new Map([['mimeType', 'Invalid mime type']]);

        const promise = download('test', URLS.INVALID_TYPE);

        await expect(promise).rejects.toStrictEqual(new InvalidImage(messages));
    });

    it('should fail to download an image that is to large', async () =>
    {
        const messages = new Map([['size', 'Invalid size']]);

        const promise = download('test', URLS.INVALID_SIZE);

        await expect(promise).rejects.toStrictEqual(new InvalidImage(messages));
    });
});
