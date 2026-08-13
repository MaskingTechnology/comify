
import { beforeAll, afterAll, describe, expect, it } from 'vitest';

import database from '@comify/common/integrations/database';
import fileStore from '@comify/common/integrations/fileStore';

import { RECORD_TYPE, type Record } from '@comify/social/domain/image';
import create, { InvalidDataURL } from '@comify/social/domain/image/create';
import { InvalidImage } from '@comify/social/domain/image/_validate';

import { DATA_URLS } from './fixtures';

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

describe('index', () =>
{
    it('should create an image from a valid data url', async () =>
    {
        const imageId = await create('valid_url', DATA_URLS.VALID);

        const record = await database.readRecord<Record>(RECORD_TYPE, { id: { EQUALS: imageId } });

        expect(record).toBeDefined();
        expect(record?.filename).toEqual('dataUrl');
        expect(record?.mimeType).toEqual('image/png');
        expect(record?.storageKey).toContain('valid_url/');

        const data = await fileStore.readFile(record?.storageKey as string);

        expect(data.length).toEqual(54);
    });

    it('should fail to create an image with an invalid data url', async () =>
    {
        const promise = create('invalid_url', DATA_URLS.INVALID_DATA);

        await expect(promise).rejects.toStrictEqual(new InvalidDataURL());
    });

    it('should fail to create an image with an invalid type', async () =>
    {
        const messages = new Map([['mimeType', 'Invalid mime type']]);

        const promise = create('invalid_type', DATA_URLS.INVALID_TYPE);

        await expect(promise).rejects.toStrictEqual(new InvalidImage(messages));
    });

    it('should fail to create an image that is to small', async () =>
    {
        const messages = new Map([['size', 'Invalid size']]);

        const promise = create('invalid_size', DATA_URLS.INVALID_SIZE);

        await expect(promise).rejects.toStrictEqual(new InvalidImage(messages));
    });
});
