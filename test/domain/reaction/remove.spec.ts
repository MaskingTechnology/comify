
import { describe, expect, it } from 'vitest';
import
{
    COMIC_REACTION_ID, COMMENT_REACTION_ID, DELETED_REACTION_ID, EXISTING_REQUESTER,
    REACTION_RECORD_TYPE, ReactionNotFound, SOME_OTHER_REQUESTER, createDatabase, remove
} from './_fixtures/reaction.fixture';

describe('domain/reaction/remove', () =>
{
    it('should soft delete a reaction with a comment', async () =>
    {
        const database = await createDatabase();

        await remove(EXISTING_REQUESTER, COMMENT_REACTION_ID);

        const reaction = await database.readRecord(REACTION_RECORD_TYPE, COMMENT_REACTION_ID);
        expect(reaction.deleted).toBe(true);
    });

    it('should soft delete a reaction with a comic', async () =>
    {
        const database = await createDatabase();

        await remove(EXISTING_REQUESTER, COMIC_REACTION_ID);

        const record = await database.readRecord(REACTION_RECORD_TYPE, COMIC_REACTION_ID);
        expect(record.deleted).toBe(true);
    });

    it('should not delete an already deleted reaction', async () =>
    {
        await createDatabase();

        const promise = remove(EXISTING_REQUESTER, DELETED_REACTION_ID);

        await expect(promise).rejects.toThrow(ReactionNotFound);
    });

    it('should not delete a reaction from another creator', async () =>
    {
        await createDatabase();

        const promise = remove(SOME_OTHER_REQUESTER, COMMENT_REACTION_ID);

        await expect(promise).rejects.toThrow(ReactionNotFound);
    });
});
