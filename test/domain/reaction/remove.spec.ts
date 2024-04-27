
import { describe, expect, it } from 'vitest';
import { COMMENT_MESSAGE, COMMENT_RECORD_TYPE, EXISTING_REQUESTER, POST_ID, REACTION_RECORD_TYPE, createCommentReaction, createDatabase, remove } from './_fixtures/reaction.fixture';

describe('domain/reaction/remove', () =>
{
    it('should soft delete a reaction', async () =>
    {
        const database = await createDatabase();
        const reaction = await createCommentReaction(EXISTING_REQUESTER, POST_ID, COMMENT_MESSAGE);

        await remove(EXISTING_REQUESTER, reaction.id);

        const record = await database.readRecord(REACTION_RECORD_TYPE, reaction.id);
        expect(record.deleted).toBe(true);

        // only soft delete the reaction, not the comment
        const comment = await database.readRecord(COMMENT_RECORD_TYPE, reaction.comment?.id as string);
        expect(comment.deleted).toBeFalsy();
    });
});
