
import { describe, expect, it } from 'vitest';

import getFollowers from '^/domain/relation/getFollowers';

import { DATABASES, REQUESTERS, VALUES } from './fixtures';

describe('domain/relation/getFollowers', () =>
{
    it('should retrieve follower relations for a following creator', async () =>
    {
        await DATABASES.withEverything();

        const relations = await getFollowers(REQUESTERS.FIRST, VALUES.IDS.CREATOR3);
        expect(relations).toHaveLength(2);
        expect(relations[0].following?.id).toBe(VALUES.IDS.CREATOR1);
        expect(relations[1].following?.id).toBe(VALUES.IDS.CREATOR2);
    });
});
