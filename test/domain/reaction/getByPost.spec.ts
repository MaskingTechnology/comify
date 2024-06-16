
import { beforeEach, describe, expect, it } from 'vitest';

import getByPost from '^/domain/reaction/getByPost/feature';

import { DATABASES, FILE_STORES, VALUES } from './fixtures';

beforeEach(async () =>
{
    await Promise.all([
        DATABASES.withEverything(),
        FILE_STORES.withImage()
    ]);
});

describe('domain/reaction/getByPost', () =>
{
    it('should not retrieve deleted reactions', async () =>
    {
        const reactions = await getByPost(VALUES.IDS.POST_EXISTING);
        expect(reactions).not.toContainEqual({ id: VALUES.IDS.REACTION_DELETED });
    });
});
