
import { describe, expect, it } from 'vitest';

import getFollowing from '^/domain/relation/getFollowing';

import { DATABASES, REQUESTERS, VALUES } from './fixtures';

describe('domain/relation/getFollowing', () =>
{
    it('should retrieve relations for a follower', async () =>
    {
        await DATABASES.withEverything();

        const relations = await getFollowing(REQUESTERS.FIRST, VALUES.IDS.CREATOR1);
        expect(relations).toHaveLength(2);
        expect(relations[0].following?.id).toBe(VALUES.IDS.CREATOR2);
        expect(relations[1].following?.id).toBe(VALUES.IDS.CREATOR3);
    });
});
