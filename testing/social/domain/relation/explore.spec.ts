
import { beforeAll, afterAll, beforeEach, describe, expect, it } from 'vitest';

import database from '@comify/common/integrations/database';

import explore from '@comify/social/domain/relation/explore';

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

const range = { limit: 7, offset: 0 };

describe('index', () =>
{
    it('should explore relations based on recent', async () =>
    {
        const relations = await explore(REQUESTERS.CHARLIE, range);

        expect(relations).toHaveLength(2);
        expect(relations[0].following?.id).toEqual(CREATOR_RECORDS.BOB.id);
        expect(relations[1].following?.id).toEqual(CREATOR_RECORDS.DAVID.id);
    });

    it('should find no relations based on search', async () =>
    {
        const relations = await explore(REQUESTERS.ALICE, range, 'eve');

        expect(relations).toHaveLength(0);
    });

    it('should find relations based on search full name', async () =>
    {
        const relations = await explore(REQUESTERS.ALICE, range, 'Castillo');

        expect(relations).toHaveLength(1);
        expect(relations[0].following?.id).toEqual(CREATOR_RECORDS.CHARLIE.id);
    });

    it('should find relations based on search nickname', async () =>
    {
        const relations = await explore(REQUESTERS.ALICE, range, 'thegreat');

        expect(relations).toHaveLength(1);
        expect(relations[0].following?.id).toEqual(CREATOR_RECORDS.BOB.id);
    });

    it('should find relations based on search full name and nickname', async () =>
    {
        const relations = await explore(REQUESTERS.DAVID, range, 'li');

        expect(relations).toHaveLength(2);
        expect(relations[0].following?.id).toEqual(CREATOR_RECORDS.ALICE.id);
        expect(relations[1].following?.id).toEqual(CREATOR_RECORDS.CHARLIE.id);
    });
});
