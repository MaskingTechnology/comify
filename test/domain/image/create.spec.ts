
import { beforeEach, describe, expect, it } from 'vitest';

import create from '^/domain/image/create';
import InvalidDataURL from '^/domain/image/errors/InvalidDataURL';
import InvalidImage from '^/domain/image/errors/InvalidImage';

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
        const image = await create('test', DATA_URLS.VALID);
        const data = await fileStore.readFile(image.storageKey);

        expect(image.filename).toEqual('dataUrl');
        expect(image.mimeType).toEqual('image/png');
        expect(image.storageKey).toContain('test/');
        expect(data.length).toEqual(54);
    });

    it('should fail to create an image with an invalid data url', async () =>
    {
        const promise = create('test', DATA_URLS.INVALID_FORMAT);
        expect(promise).rejects.toStrictEqual(new InvalidDataURL());
    });

    it('should fail to create an image with an invalid type', async () =>
    {
        const promise = create('test', DATA_URLS.INVALID_TYPE);
        expect(promise).rejects.toStrictEqual(new InvalidImage('Invalid field(s): mimeType'));
    });

    it('should fail to create an image that is to small', async () =>
    {
        const promise = create('test', DATA_URLS.INVALID_SIZE);
        expect(promise).rejects.toStrictEqual(new InvalidImage('Invalid field(s): size'));
    });
});
