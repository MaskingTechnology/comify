
import { describe, expect, it } from 'vitest';
import { COMIC_DATA_URL, COMIC_RECORD_TYPE, COMMENT_MESSAGE, COMMENT_RECORD_TYPE, EXISTING_REQUESTER, IMAGE_RECORD_TYPE, NOT_EXISTING_POST_ID, POST_ID, POST_RECORD_TYPE, REACTION_RECORD_TYPE, createComicReaction, createCommentReaction, createDatabase, createFileStorage } from './_fixtures/reaction.fixture';

describe('domain/reaction/create', () =>
{
    it('should create a comment reaction', async () =>
    {
        const database = await createDatabase();

        const reaction = await createCommentReaction(EXISTING_REQUESTER, POST_ID, COMMENT_MESSAGE);

        const record = await database.readRecord(REACTION_RECORD_TYPE, reaction.id);

        expect(record?.creatorId).toBe(reaction.creator.id);
        expect(record?.postId).toBe(POST_ID);
        expect(record?.comicId).toBeUndefined();
        expect(record?.commentId).toBe(reaction.comment?.id);
        expect(record?.ratingCount).toBe(0);
        expect(record?.createdAt).toBeDefined();

        const post = await database.readRecord(POST_RECORD_TYPE, record.postId as string);
        expect(post?.creatorId).toBe(EXISTING_REQUESTER.id);
        expect(post?.comicId).toBeDefined();
        expect(post?.createdAt).toBeDefined();
        expect(post?.ratingCount).toBe(0);
        expect(post?.reactionCount).toBe(1);

        const comment = await database.readRecord(COMMENT_RECORD_TYPE, record.commentId as string);
        expect(comment?.message).toBe(COMMENT_MESSAGE);
    });

    it('should create a comic reaction', async () =>
    {
        const database = await createDatabase();
        const filestorage = await createFileStorage();

        const reaction = await createComicReaction(EXISTING_REQUESTER, POST_ID, COMIC_DATA_URL);

        const record = await database.readRecord(REACTION_RECORD_TYPE, reaction.id);
        expect(record?.creatorId).toBe(reaction.creator.id);
        expect(record?.postId).toBe(POST_ID);
        expect(record?.comicId).toBe(reaction.comic?.id);
        expect(record?.commentId).toBeUndefined();
        expect(record?.ratingCount).toBe(0);
        expect(record?.createdAt).toBeDefined();

        const post = await database.readRecord(POST_RECORD_TYPE, record.postId as string);
        expect(post?.creatorId).toBe(EXISTING_REQUESTER.id);
        expect(post?.comicId).toBeDefined();
        expect(post?.createdAt).toBeDefined();
        expect(post?.ratingCount).toBe(0);
        expect(post?.reactionCount).toBe(1);

        const comic = await database.readRecord(COMIC_RECORD_TYPE, record.comicId as string);
        expect(comic?.imageId).toBeDefined();

        const image = await database.readRecord(IMAGE_RECORD_TYPE, comic.imageId as string);
        expect(image?.storageKey).toBeDefined();

        const file = await filestorage.readFile(image.storageKey as string);
        expect(file).toBeDefined();
    });

    it('should rollback created data at failed comment reaction', async () =>
    {
        const database = await createDatabase();

        // This should fail at the last action when incrementing post's reaction count
        const promise = createCommentReaction(EXISTING_REQUESTER, NOT_EXISTING_POST_ID, COMMENT_MESSAGE);
        await expect(promise).rejects.toThrow('Record not found');

        const reactions = await database.searchRecords(REACTION_RECORD_TYPE, {});
        expect(reactions.length).toBe(0);

        const posts = await database.searchRecords(POST_RECORD_TYPE, {});
        expect(posts.length).toBe(1);

        const comments = await database.searchRecords(COMMENT_RECORD_TYPE, {});
        expect(comments.length).toBe(0);
    });

    it('should rollback created data at failed comic reaction', async () =>
    {
        const database = await createDatabase();

        // This should fail at the last action when incrementing post's reaction count
        const promise = createComicReaction(EXISTING_REQUESTER, NOT_EXISTING_POST_ID, COMIC_DATA_URL);
        await expect(promise).rejects.toThrow('Record not found');

        const reactions = await database.searchRecords(REACTION_RECORD_TYPE, {});
        expect(reactions.length).toBe(0);

        const posts = await database.searchRecords(POST_RECORD_TYPE, {});
        expect(posts.length).toBe(1);

        const comics = await database.searchRecords(COMIC_RECORD_TYPE, {});
        expect(comics.length).toBe(0);

        const images = await database.searchRecords(IMAGE_RECORD_TYPE, {});
        expect(images.length).toBe(0);
    });
});
