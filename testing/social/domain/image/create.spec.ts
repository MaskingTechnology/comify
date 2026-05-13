
import { beforeAll, afterAll, beforeEach, describe, expect, it } from 'vitest';

import database from '^/integrations/database';
import fileStore from '^/integrations/fileStore';

import { RECORD_TYPE } from '^/domain/image';
import create, { InvalidDataURL } from '^/domain/image/create';
import InvalidImage from '^/domain/image/validate/InvalidImage';

import { DATA_URLS, DATABASES, FILE_STORES } from './fixtures';

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

beforeEach(async () =>
{
    await Promise.all([
        DATABASES.empty(),
        FILE_STORES.empty()
    ]);
});

describe('domain/image/create', () =>
{
    it('should create an image from a valid data url', async () =>
    {
        const imageId = await create('test', DATA_URLS.VALID);
        const image = await database.readRecord(RECORD_TYPE, { id: { EQUALS: imageId } });

        expect(image).toBeDefined();

        const data = await fileStore.readFile(image?.storageKey as string);

        expect(image?.filename).toEqual('dataUrl');
        expect(image?.mimeType).toEqual('image/png');
        expect(image?.storageKey).toContain('test/');
        expect(data.length).toEqual(54);
    });

    it('should fail to create an image with an invalid data url', async () =>
    {
        const promise = create('test', DATA_URLS.INVALID_FORMAT);

        await expect(promise).rejects.toStrictEqual(new InvalidDataURL());
    });

    it('should fail to create an image with an invalid type', async () =>
    {
        const messages = new Map([['mimeType', 'Invalid mime type']]);

        const promise = create('test', DATA_URLS.INVALID_TYPE);

        await expect(promise).rejects.toStrictEqual(new InvalidImage(messages));
    });

    it('should fail to create an image that is to small', async () =>
    {
        const messages = new Map([['size', 'Invalid size']]);

        const promise = create('test', DATA_URLS.INVALID_SIZE);
        
        await expect(promise).rejects.toStrictEqual(new InvalidImage(messages));
    });
});
