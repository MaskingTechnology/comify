
import { beforeEach, describe, expect, it } from 'vitest';

import { RECORD_TYPE as COMIC_RECORD_TYPE } from '^/domain/comic/definitions';
import { RECORD_TYPE as COMMENT_RECORD_TYPE } from '^/domain/comment/definitions/constants';
import { RECORD_TYPE as IMAGE_RECORD_TYPE } from '^/domain/image/definitions/constants';
import { RECORD_TYPE as POST_RECORD_TYPE } from '^/domain/post/definitions/constants';
import PostNotFound from '^/domain/post/errors/PostNotFound';
import createComicReaction from '^/domain/reaction/createComic';
import createCommentReaction from '^/domain/reaction/createComment';
import { RECORD_TYPE as REACTION_RECORD_TYPE } from '^/domain/reaction/definitions/constants';

import database from '^/integrations/database/module';
import fileStore from '^/integrations/filestore/module';

import { DATABASES, FILE_STORES, REQUESTERS, VALUES } from './fixtures';

beforeEach(async () =>
{
    await Promise.all([
        DATABASES.withEverything(),
        FILE_STORES.withImage()
    ]);
});

describe('domain/reaction/create', () =>
{
    it('should create a comment reaction', async () =>
    {
        const reaction = await createCommentReaction(REQUESTERS.OWNER, VALUES.IDS.POST_EXISTING, VALUES.MESSAGES.COMMENT);

        const record = await database.readRecord(REACTION_RECORD_TYPE, reaction.id);
        expect(record?.creatorId).toBe(REQUESTERS.OWNER.id);
        expect(record?.postId).toBe(VALUES.IDS.POST_EXISTING);
        expect(record?.comicId).toBeUndefined();
        expect(record?.commentId).toBe(reaction.comment?.id);
        expect(record?.ratingCount).toBe(0);
        expect(record?.createdAt).toBeDefined();

        const post = await database.readRecord(POST_RECORD_TYPE, record.postId as string);
        expect(post?.creatorId).toBe(REQUESTERS.OWNER.id);
        expect(post?.comicId).toBeDefined();
        expect(post?.createdAt).toBeDefined();
        expect(post?.ratingCount).toBe(0);
        expect(post?.reactionCount).toBe(1);

        const comment = await database.readRecord(COMMENT_RECORD_TYPE, record.commentId as string);
        expect(comment?.message).toBe(VALUES.MESSAGES.COMMENT);
    });

    it('should create a comic reaction', async () =>
    {
        const reaction = await createComicReaction(REQUESTERS.OWNER, VALUES.IDS.POST_EXISTING, VALUES.DATA_URLS.COMIC);

        const record = await database.readRecord(REACTION_RECORD_TYPE, reaction.id);
        expect(record?.creatorId).toBe(REQUESTERS.OWNER.id);
        expect(record?.postId).toBe(VALUES.IDS.POST_EXISTING);
        expect(record?.comicId).toBe(reaction.comic?.id);
        expect(record?.commentId).toBeUndefined();
        expect(record?.ratingCount).toBe(0);
        expect(record?.createdAt).toBeDefined();

        const post = await database.readRecord(POST_RECORD_TYPE, record.postId as string);
        expect(post?.creatorId).toBe(REQUESTERS.OWNER.id);
        expect(post?.comicId).toBeDefined();
        expect(post?.createdAt).toBeDefined();
        expect(post?.ratingCount).toBe(0);
        expect(post?.reactionCount).toBe(1);

        const comic = await database.readRecord(COMIC_RECORD_TYPE, record.comicId as string);
        expect(comic?.imageId).toBeDefined();

        const image = await database.readRecord(IMAGE_RECORD_TYPE, comic.imageId as string);
        expect(image?.storageKey).toBeDefined();

        const file = await fileStore.readFile(image.storageKey as string);
        expect(file).toBeDefined();
    });

    it('should rollback created data at failed comment reaction', async () =>
    {
        // This should fail at the last action when incrementing post's reaction count
        const promise = createCommentReaction(REQUESTERS.OWNER, VALUES.IDS.POST_NOT_EXISTING, VALUES.MESSAGES.COMMENT);
        await expect(promise).rejects.toThrow(PostNotFound);

        const reactions = await database.searchRecords(REACTION_RECORD_TYPE, {});
        expect(reactions).toHaveLength(5);

        const posts = await database.searchRecords(POST_RECORD_TYPE, {});
        expect(posts).toHaveLength(1);

        const comments = await database.searchRecords(COMMENT_RECORD_TYPE, {});
        expect(comments).toHaveLength(1);
    });

    it('should rollback created data at failed comic reaction', async () =>
    {
        // This should fail at the last action when incrementing post's reaction count
        const promise = createComicReaction(REQUESTERS.OWNER, VALUES.IDS.POST_NOT_EXISTING, VALUES.DATA_URLS.COMIC);
        await expect(promise).rejects.toThrow(PostNotFound);

        const reactions = await database.searchRecords(REACTION_RECORD_TYPE, {});
        expect(reactions).toHaveLength(5);

        const posts = await database.searchRecords(POST_RECORD_TYPE, {});
        expect(posts).toHaveLength(1);

        const comics = await database.searchRecords(COMIC_RECORD_TYPE, {});
        expect(comics).toHaveLength(1);

        const images = await database.searchRecords(IMAGE_RECORD_TYPE, {});
        expect(images).toHaveLength(1);
    });
});
