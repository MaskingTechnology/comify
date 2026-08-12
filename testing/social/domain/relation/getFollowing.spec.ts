
import { beforeAll, afterAll, beforeEach, describe, expect, it } from 'vitest';

import database from '@comify/common/integrations/database';

import getFollowing from '@comify/social/domain/relation/getFollowing';

import { DATABASES, REQUESTERS, VALUES } from './fixtures';

beforeAll(async () =>
{
    await database.connect();
});

afterAll(async () =>
{
    await database.disconnect();
});

beforeEach(async () =>
{
    await DATABASES.withEverything();
});

describe('domain/relation/getFollowing', () =>
{
    it('should retrieve relations for a follower', async () =>
    {
        const relations = await getFollowing(REQUESTERS.FIRST, VALUES.IDS.CREATOR1, VALUES.RANGE);

        expect(relations).toHaveLength(2);
        expect(relations[0].following?.id).toBe(VALUES.IDS.CREATOR2);
        expect(relations[1].following?.id).toBe(VALUES.IDS.CREATOR3);
    });
});
