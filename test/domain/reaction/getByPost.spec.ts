
import { describe, expect, it } from 'vitest';
import { COMMENT_MESSAGE, EXISTING_REQUESTER, POST_ID, createCommentReaction, createDatabase, getByPost, remove } from './_fixtures/reaction.fixture';

describe('domain/reaction/getByPost', () =>
{
    it('should not retrieve deleted reactions', async () =>
    {
        await createDatabase();

        const reaction = await createCommentReaction(EXISTING_REQUESTER, POST_ID, COMMENT_MESSAGE);

        const reactions = await getByPost(EXISTING_REQUESTER, POST_ID);
        expect(reactions).toContainEqual(reaction);

        await remove(EXISTING_REQUESTER, reaction.id);

        const reactionsAfterDelete = await getByPost(EXISTING_REQUESTER, POST_ID);
        expect(reactionsAfterDelete).not.toContainEqual(reaction);
    });
});
