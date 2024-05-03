
import { describe, expect, it } from 'vitest';

import { DATA, DATABASES, FILE_STORAGES } from './fixtures';

import create from '^/domain/image/create';
import InvalidDataURL from '^/domain/image/errors/InvalidDataURL';
import InvalidImage from '^/domain/image/errors/InvalidImage';

describe('domain/image/create', () =>
{
    it('should create an image from a valid data url', async () =>
    {
        await DATABASES.empty();
        const fileStorage = await FILE_STORAGES.empty();

        const image = await create('test', DATA.VALID);
        const data = await fileStorage.readFile(image.storageKey);

        expect(image.filename).toEqual('dataUrl');
        expect(image.mimeType).toEqual('image/png');
        expect(image.storageKey).toContain('test/');
        expect(data.length).toEqual(54);
    });

    it('should fail to create an image with an invalid data url', async () =>
    {
        const promise = create('test', DATA.INVALID_FORMAT);

        expect(promise).rejects.toStrictEqual(new InvalidDataURL());
    });

    it('should fail to create an image with an invalid type', async () =>
    {
        const promise = create('test', DATA.INVALID_TYPE);

        expect(promise).rejects.toStrictEqual(new InvalidImage('Invalid field(s): mimeType'));
    });

    it('should fail to create an image that is to small', async () =>
    {
        const promise = create('test', DATA.INVALID_SIZE);

        expect(promise).rejects.toStrictEqual(new InvalidImage('Invalid field(s): size'));
    });
});
