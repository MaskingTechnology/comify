
import { beforeEach, describe, expect, it } from 'vitest';

import getFollowing from '^/domain/relation/getFollowing/feature';

import { DATABASES, REQUESTERS, VALUES } from './fixtures';

beforeEach(async () =>
{
    await DATABASES.withEverything();
});

describe('domain/relation/getFollowing', () =>
{
    it('should retrieve relations for a follower', async () =>
    {
        const relations = await getFollowing(REQUESTERS.FIRST, VALUES.IDS.CREATOR1, VALUES.LIMIT, VALUES.OFFSET);
        expect(relations).toHaveLength(2);
        expect(relations[0].followingId).toBe(VALUES.IDS.CREATOR2);
        expect(relations[1].followingId).toBe(VALUES.IDS.CREATOR3);
    });
});
