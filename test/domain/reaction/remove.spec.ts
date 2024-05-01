
import { describe, expect, it } from 'vitest';
import { COMIC_DATA_URL, COMIC_RECORD_TYPE, COMMENT_MESSAGE, COMMENT_RECORD_TYPE, EXISTING_REQUESTER, POST_ID, REACTION_RECORD_TYPE, createComicReaction, createCommentReaction, createDatabase, createFileStorage, remove } from './_fixtures/reaction.fixture';

describe('domain/reaction/remove', () =>
{
    it('should soft delete a reaction with a comment', async () =>
    {
        const database = await createDatabase();
        const reaction = await createCommentReaction(EXISTING_REQUESTER, POST_ID, COMMENT_MESSAGE);

        await remove(EXISTING_REQUESTER, reaction.id);

        const record = await database.readRecord(REACTION_RECORD_TYPE, reaction.id);
        expect(record.deleted).toBe(true);

        // only soft delete the reaction, not the comment
        const comment = await database.readRecord(COMMENT_RECORD_TYPE, reaction.comment?.id as string);
        expect(comment.deleted).toBeUndefined();
    });

    it('should soft delete a reaction with a comic', async () =>
    {
        const database = await createDatabase();
        await createFileStorage();

        const reaction = await createComicReaction(EXISTING_REQUESTER, POST_ID, COMIC_DATA_URL);

        await remove(EXISTING_REQUESTER, reaction.id);

        const record = await database.readRecord(REACTION_RECORD_TYPE, reaction.id);
        expect(record.deleted).toBe(true);

        // only soft delete the reaction, not the comic
        const comic = await database.readRecord(COMIC_RECORD_TYPE, reaction.comic?.id as string);
        expect(comic.deleted).toBeUndefined();
    });
});
