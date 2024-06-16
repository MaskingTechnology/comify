
import { beforeEach, describe, expect, it } from 'vitest';

import getFollowers from '^/domain/relation/getFollowers/feature';

import { DATABASES, REQUESTERS, VALUES } from './fixtures';

beforeEach(async () =>
{
    await DATABASES.withEverything();
});

describe('domain/relation/getFollowers', () =>
{
    it('should retrieve follower relations for a following creator', async () =>
    {
        const relations = await getFollowers(REQUESTERS.FIRST, VALUES.IDS.CREATOR3, VALUES.LIMIT, VALUES.OFFSET);
        expect(relations).toHaveLength(2);
        expect(relations[0].followingId).toBe(VALUES.IDS.CREATOR1);
        expect(relations[1].followingId).toBe(VALUES.IDS.CREATOR2);
    });
});
