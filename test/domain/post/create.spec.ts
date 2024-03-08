
import { describe, expect, it } from 'vitest';
import { COMIC_RECORD_TYPE, DATA_URL, EXISTING_REQUESTER, IMAGE_RECORD_TYPE, POST_RECORD_TYPE, UNKNOWN_REQUESTER, create, createDatabase, createFileStorage } from './_fixtures/post.fixture';

describe('domain/post/create', () =>
{
    it('should create an image from a valid data url', async () =>
    {
        const database = await createDatabase();
        const fileStorage = await createFileStorage();

        await create(EXISTING_REQUESTER, DATA_URL);

        const posts = await database.searchRecords(POST_RECORD_TYPE, {});
        expect(posts.length).toBe(1);

        const post = posts[0];
        expect(post?.creatorId).toBe(EXISTING_REQUESTER.id);
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
        const database = await createDatabase();

        // This should fail at the last action when incrementing the creator's post count
        const promise = create(UNKNOWN_REQUESTER, DATA_URL);
        await expect(promise).rejects.toThrow('Record not found');

        const posts = await database.searchRecords(POST_RECORD_TYPE, {});
        expect(posts.length).toBe(0);

        const comics = await database.searchRecords(COMIC_RECORD_TYPE, {});
        expect(comics.length).toBe(0);

        const images = await database.searchRecords(IMAGE_RECORD_TYPE, {});
        expect(images.length).toBe(0);
    });
});
