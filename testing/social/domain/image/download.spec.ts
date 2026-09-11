
import { beforeAll, afterAll, beforeEach, describe, expect, it } from 'vitest';

import database from '@comify/common/integrations/database';
import fileStore from '@comify/common/integrations/files';

import { RECORD_TYPE, type Record } from '@comify/social/domain/image';
import download, { ImageNotDownloaded } from '@comify/social/domain/image/download';
import { InvalidImage } from '@comify/social/domain/image/_validate';

import { URLS, seedImages } from './fixtures';

beforeAll(async () =>
{
    await Promise.all([
        database.connect(),
        fileStore.connect()
    ]);
});

afterAll(async () =>
{
    await Promise.all([
        database.disconnect(),
        fileStore.disconnect()
    ]);
});

beforeEach(() =>
{
    seedImages();
});

describe('index', () =>
{
    it('should download an image', async () =>
    {
        const imageId = await download('test', URLS.VALID);

        const record = await database.readRecord<Record>(RECORD_TYPE, { id: { EQUALS: imageId } });

        expect(record).toBeDefined();
        expect(record?.filename).toEqual('image.jpg');
        expect(record?.mimeType).toEqual('image/jpeg');
        expect(record?.storageKey).toContain('test/');

        const data = await fileStore.readFile(record?.storageKey as string);

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
