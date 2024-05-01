
import { describe, expect, it } from 'vitest';
import { IMAGE_URLS, ImageNotDownloaded, createDatabase, createFileStorage, download } from './_fixtures/image.fixture';

describe('domain/image/download', () =>
{
    it('should download an image', async () =>
    {
        await createDatabase();
        const fileStorage = await createFileStorage();

        const image = await download('test', IMAGE_URLS.VALID);
        const data = await fileStorage.readFile(image.storageKey);

        expect(image.filename).toEqual('peter.jpg');
        expect(image.mimeType).toEqual('image/jpeg');
        expect(image.storageKey).toContain('test/');
        expect(data.length).toEqual(285897);
    });

    it('should fail to download an non-existing image', async () =>
    {
        const promise = download('test', IMAGE_URLS.NONEXISTING);

        await expect(promise).rejects.toStrictEqual(new ImageNotDownloaded());
    });

    it('should fail to download an image with an invalid type', async () =>
    {
        // Not implemented until we have moved the fetch to the integration layer
        expect(true).toEqual(true);
    });

    it('should fail to download an image that is to large', async () =>
    {
        // Not implemented until we have moved the fetch to the integration layer
        expect(true).toEqual(true);
    });
});
