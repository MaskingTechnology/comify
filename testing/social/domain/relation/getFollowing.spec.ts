
import { beforeAll, afterAll, beforeEach, describe, expect, it } from 'vitest';

import database from '@comify/common/integrations/database';

import getFollowing from '@comify/social/domain/relation/getFollowing';

import { REQUESTERS, CREATOR_RECORDS, fullySeedCreators } from '../../fixtures';

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
    await fullySeedCreators();
});

describe('index', () =>
{
    it('should retrieve relations for a follower', async () =>
    {
        const relations = await getFollowing(REQUESTERS.BOB, CREATOR_RECORDS.BOB.id, { limit: 7, offset: 0 });

        expect(relations).toHaveLength(2);
        expect(relations[0].following?.id).toBe(CREATOR_RECORDS.ALICE.id);
        expect(relations[1].following?.id).toBe(CREATOR_RECORDS.DAVID.id);
    });
});
