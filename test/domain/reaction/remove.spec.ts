
import { describe, expect, it } from 'vitest';
import { COMIC_REACTION_ID, COMIC_RECORD_TYPE, COMMENT_REACTION_ID, COMMENT_RECORD_TYPE, DELETED_REACTION_ID, EXISTING_REQUESTER, REACTION_COMIC_ID, REACTION_COMMENT_ID, REACTION_RECORD_TYPE, ReactionNotFound, SOME_OTHER_REQUESTER, createDatabase, remove } from './_fixtures/reaction.fixture';

describe('domain/reaction/remove', () =>
{
    it('should soft delete a reaction with a comment', async () =>
    {
        const database = await createDatabase();

        await remove(EXISTING_REQUESTER, COMMENT_REACTION_ID);

        const reaction = await database.readRecord(REACTION_RECORD_TYPE, COMMENT_REACTION_ID);
        expect(reaction.deleted).toBe(true);

        // only soft delete the reaction, not the comment
        const comment = await database.readRecord(COMMENT_RECORD_TYPE, REACTION_COMMENT_ID);
        expect(comment.deleted).toBeUndefined();
    });

    it('should soft delete a reaction with a comic', async () =>
    {
        const database = await createDatabase();

        await remove(EXISTING_REQUESTER, COMIC_REACTION_ID);

        const record = await database.readRecord(REACTION_RECORD_TYPE, COMIC_REACTION_ID);
        expect(record.deleted).toBe(true);

        // only soft delete the reaction, not the comic
        const comic = await database.readRecord(COMIC_RECORD_TYPE, REACTION_COMIC_ID);
        expect(comic.deleted).toBeUndefined();
    });

    it('should not delete already deleted reaction', async () =>
    {
        await createDatabase();

        const promise = remove(EXISTING_REQUESTER, DELETED_REACTION_ID);

        await expect(promise).rejects.toThrow(ReactionNotFound);
    });

    it('should not delete other creator reaction', async () =>
    {
        await createDatabase();

        const promise = remove(SOME_OTHER_REQUESTER, COMMENT_REACTION_ID);

        await expect(promise).rejects.toThrow(ReactionNotFound);
    });
});
