
import { beforeEach, describe, expect, it } from 'vitest';

import InvalidComment from '^/domain/comment/create/InvalidComment';
import { RECORD_TYPE as COMMENT_RECORD_TYPE } from '^/domain/comment/definitions';
import PostNotFound from '^/domain/post/PostNotFound';
import { RECORD_TYPE as POST_RECORD_TYPE } from '^/domain/post/definitions';
import create from '^/domain/reaction/createComment/feature';
import { RECORD_TYPE as REACTION_RECORD_TYPE } from '^/domain/reaction/definitions';

import database from '^/integrations/database/module';

import { DATABASES, FILE_STORES, REQUESTERS, VALUES } from './fixtures';

beforeEach(async () =>
{
    await Promise.all([
        DATABASES.withEverything(),
        FILE_STORES.withImage()
    ]);
});

describe('domain/reaction/createComment', () =>
{
    it('should create a comment reaction', async () =>
    {
        const reactionId = await create(REQUESTERS.OWNER, VALUES.IDS.POST_EXISTING, VALUES.MESSAGES.VALID_COMMENT);

        const reaction = await database.readRecord(REACTION_RECORD_TYPE, reactionId);
        expect(reaction?.creatorId).toBe(REQUESTERS.OWNER.id);
        expect(reaction?.postId).toBe(VALUES.IDS.POST_EXISTING);
        expect(reaction?.comicId).toBeUndefined();
        expect(reaction?.ratingCount).toBe(0);
        expect(reaction?.createdAt).toBeDefined();

        const post = await database.readRecord(POST_RECORD_TYPE, reaction.postId as string);
        expect(post?.creatorId).toBe(REQUESTERS.OWNER.id);
        expect(post?.comicId).toBeDefined();
        expect(post?.createdAt).toBeDefined();
        expect(post?.ratingCount).toBe(0);
        expect(post?.reactionCount).toBe(1);

        const comment = await database.readRecord(COMMENT_RECORD_TYPE, reaction.commentId as string);
        expect(comment?.message).toBe(VALUES.MESSAGES.VALID_COMMENT);
    });

    it('should rollback created data at non-existing post comment reaction', async () =>
    {
        // This should fail at the last action when incrementing post's reaction count
        const promise = create(REQUESTERS.OWNER, VALUES.IDS.POST_NOT_EXISTING, VALUES.MESSAGES.VALID_COMMENT);
        await expect(promise).rejects.toThrow(PostNotFound);

        const reactions = await database.searchRecords(REACTION_RECORD_TYPE, {});
        expect(reactions).toHaveLength(5);

        const posts = await database.searchRecords(POST_RECORD_TYPE, {});
        expect(posts).toHaveLength(1);

        const comments = await database.searchRecords(COMMENT_RECORD_TYPE, {});
        expect(comments).toHaveLength(1);
    });

    it('should rollback created data at invalid comment reaction', async () =>
    {
        // This should fail at the first action when creating the comment
        const promise = create(REQUESTERS.OWNER, VALUES.IDS.POST_EXISTING, VALUES.MESSAGES.INVALID_COMMENT);
        await expect(promise).rejects.toThrow(InvalidComment);

        const reactions = await database.searchRecords(REACTION_RECORD_TYPE, {});
        expect(reactions).toHaveLength(5);

        const posts = await database.searchRecords(POST_RECORD_TYPE, {});
        expect(posts).toHaveLength(1);

        const comments = await database.searchRecords(COMMENT_RECORD_TYPE, {});
        expect(comments).toHaveLength(1);
    });
});
