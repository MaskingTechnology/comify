
import { beforeEach, describe, expect, it } from 'vitest';

import create from '^/domain/image/create/feature';
import InvalidDataURL from '^/domain/image/create/InvalidDataURL';
import { RECORD_TYPE } from '^/domain/image/definitions';
import InvalidImage from '^/domain/image/validate/InvalidImage';

import database from '^/integrations/database/module';
import fileStore from '^/integrations/filestore/module';

import { DATA_URLS, DATABASES, FILE_STORES } from './fixtures';

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
        const image = await database.readRecord(RECORD_TYPE, imageId);
        const data = await fileStore.readFile(image.storageKey as string);

        expect(image.filename).toEqual('dataUrl');
        expect(image.mimeType).toEqual('image/png');
        expect(image.storageKey).toContain('test/');
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
