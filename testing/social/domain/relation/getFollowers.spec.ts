
import { beforeAll, afterAll, beforeEach, describe, expect, it } from 'vitest';

import database from '@comify/common/integrations/database';

import getFollowers from '@comify/social/domain/relation/getFollowers';

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
    it('should retrieve follower relations for a following creator', async () =>
    {
        const relations = await getFollowers(REQUESTERS.ALICE, CREATOR_RECORDS.ALICE.id, { limit: 7, offset: 0 });

        expect(relations).toHaveLength(2);
        expect(relations[0].following?.id).toEqual(CREATOR_RECORDS.BOB.id);
        expect(relations[1].following?.id).toEqual(CREATOR_RECORDS.CHARLIE.id);
    });
});
