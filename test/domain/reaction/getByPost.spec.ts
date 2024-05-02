
import { describe, expect, it } from 'vitest';
import { DELETED_REACTION_ID, EXISTING_REQUESTER, POST_ID, createDatabase, createFileStorage, getByPost } from './_fixtures/reaction.fixture';

describe('domain/reaction/getByPost', () =>
{
    it('should not retrieve deleted reactions', async () =>
    {
        await createDatabase();
        await createFileStorage();

        const reactions = await getByPost(EXISTING_REQUESTER, POST_ID);
        expect(reactions).not.toContainEqual({ id: DELETED_REACTION_ID });
    });
});
