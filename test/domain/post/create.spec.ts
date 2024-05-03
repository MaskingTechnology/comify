
import { describe, expect, it } from 'vitest';

import { RECORD_TYPE as COMIC_RECORD_TYPE } from '^/domain/comic/definitions/constants';
import { RECORD_TYPE as IMAGE_RECORD_TYPE } from '^/domain/image/definitions/constants';
import create from '^/domain/post/create';
import { RECORD_TYPE as POST_RECORD_TYPE } from '^/domain/post/definitions/constants';

import { DATABASES, DATA_URLS, FILE_STORAGES, REQUESTERS } from './fixtures';

describe('domain/post/create', () =>
{
    it('should create an image from a valid data url', async () =>
    {
        const database = await DATABASES.withCreators();
        const fileStorage = await FILE_STORAGES.empty();

        await create(REQUESTERS.EXISTING, DATA_URLS.COMIC_IMAGE);

        const posts = await database.searchRecords(POST_RECORD_TYPE, {});
        expect(posts.length).toBe(1);

        const post = posts[0];
        expect(post?.creatorId).toBe(REQUESTERS.EXISTING.id);
        expect(post?.comicId).toBeDefined();
        expect(post?.createdAt).toBeDefined();
        expect(post?.ratingCount).toBe(0);
        expect(post?.reactionCount).toBe(0);

        const comic = await database.readRecord(COMIC_RECORD_TYPE, post.comicId as string);
        expect(comic).toBeDefined();
        expect(comic?.imageId).toBeDefined();

        const image = await database.readRecord(IMAGE_RECORD_TYPE, comic.imageId as string);
        expect(image).toBeDefined();
        expect(image?.filename).toEqual('dataUrl');
        expect(image?.mimeType).toEqual('image/jpeg');
        expect(image?.storageKey).toContain('comic/');

        const data = await fileStorage.readFile(image.storageKey as string);
        expect(data.length).toEqual(54);
    });

    it('should rollback created data at failure', async () =>
    {
        const database = await DATABASES.withCreators();

        // This should fail at the last action when incrementing the creator's post count
        const promise = create(REQUESTERS.UNKNOWN, DATA_URLS.COMIC_IMAGE);
        await expect(promise).rejects.toThrow('Record not found');

        const posts = await database.searchRecords(POST_RECORD_TYPE, {});
        expect(posts.length).toBe(0);

        const comics = await database.searchRecords(COMIC_RECORD_TYPE, {});
        expect(comics.length).toBe(0);

        const images = await database.searchRecords(IMAGE_RECORD_TYPE, {});
        expect(images.length).toBe(0);
    });
});
