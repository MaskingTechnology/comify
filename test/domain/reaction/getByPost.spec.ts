
import { describe, expect, it } from 'vitest';

import getByPost from '^/domain/reaction/getByPost';

import { DATABASES, FILE_STORAGES, REQUESTERS, VALUES } from './fixtures';

describe('domain/reaction/getByPost', () =>
{
    it('should not retrieve deleted reactions', async () =>
    {
        await DATABASES.withEverything();
        await FILE_STORAGES.withImage();

        const reactions = await getByPost(REQUESTERS.OWNER, VALUES.IDS.POST_EXISTING);
        expect(reactions).not.toContainEqual({ id: VALUES.IDS.REACTION_DELETED });
    });
});
