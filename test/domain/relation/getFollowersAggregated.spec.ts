
import { beforeEach, describe, expect, it } from 'vitest';

import getFollowers from '^/domain/relation/getFollowersAggregated';

import { DATABASES, REQUESTERS, TENANTS, VALUES } from './fixtures';

beforeEach(async () =>
{
    await DATABASES.withEverything();
});

describe('domain/relation/getFollowers', () =>
{
    it('should retrieve follower relations for a following creator', async () =>
    {
        const relations = await getFollowers(TENANTS.default, REQUESTERS.FIRST, VALUES.IDS.CREATOR3, VALUES.RANGE);
        expect(relations).toHaveLength(2);
        expect(relations[0].following?.id).toBe(VALUES.IDS.CREATOR1);
        expect(relations[1].following?.id).toBe(VALUES.IDS.CREATOR2);
    });
});
