
import { beforeEach, describe, expect, it } from 'vitest';

import getByPost from '^/domain/reaction/getByPostAggregated/feature';

import { DATABASES, FILE_STORES, REQUESTERS, VALUES } from './fixtures';

beforeEach(async () =>
{
    await Promise.all([
        DATABASES.withEverything(),
        FILE_STORES.withImage()
    ]);
});

describe('domain/reaction/getByPostAggregated', () =>
{
    it('should not retrieve deleted reactions', async () =>
    {
        const reactions = await getByPost(REQUESTERS.OWNER, VALUES.IDS.POST_EXISTING, VALUES.RANGE);
        expect(reactions).not.toContainEqual({ id: VALUES.IDS.REACTION_DELETED });
    });
});
