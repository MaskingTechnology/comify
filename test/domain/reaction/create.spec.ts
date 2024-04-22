
import { describe, expect, it } from 'vitest';
import { COMMENT_RECORD_TYPE, EXISTING_REQUESTER, NOT_EXISTING_POST_ID, POST_ID, POST_RECORD_TYPE, REACTION_MESSAGE, REACTION_RECORD_TYPE, create, createDatabase } from './_fixtures/reaction.fixture';

describe('domain/reaction/create', () =>
{
    it('should create a reaction', async () =>
    {
        const database = await createDatabase();

        await create(EXISTING_REQUESTER, POST_ID, REACTION_MESSAGE);

        const reactions = await database.searchRecords(REACTION_RECORD_TYPE, {});
        expect(reactions.length).toBe(1);

        const reaction = reactions[0];
        expect(reaction?.creatorId).toBe(EXISTING_REQUESTER.id);
        expect(reaction?.postId).toBeDefined();
        expect(reaction?.comicId).toBeUndefined();
        expect(reaction?.commentId).toBeDefined();
        expect(reaction?.ratingCount).toBe(0);
        expect(reaction?.createdAt).toBeDefined();

        const post = await database.readRecord(POST_RECORD_TYPE, reaction.postId as string);
        expect(post?.creatorId).toBe(EXISTING_REQUESTER.id);
        expect(post?.comicId).toBeDefined();
        expect(post?.createdAt).toBeDefined();
        expect(post?.ratingCount).toBe(0);
        expect(post?.reactionCount).toBe(1);

        const comment = await database.readRecord(COMMENT_RECORD_TYPE, reaction.commentId as string);
        expect(comment?.message).toBe(REACTION_MESSAGE);
    });

    it('should rollback created data at failure', async () =>
    {
        const database = await createDatabase();

        // This should fail at the last action when incrementing post's reaction count
        const promise = create(EXISTING_REQUESTER, NOT_EXISTING_POST_ID, REACTION_MESSAGE);
        await expect(promise).rejects.toThrow('Record not found');

        const reactions = await database.searchRecords(REACTION_RECORD_TYPE, {});
        expect(reactions.length).toBe(0);

        const posts = await database.searchRecords(POST_RECORD_TYPE, {});
        expect(posts.length).toBe(1);

        const comments = await database.searchRecords(COMMENT_RECORD_TYPE, {});
        expect(comments.length).toBe(0);
    });
});
