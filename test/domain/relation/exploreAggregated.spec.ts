
import { beforeEach, describe, expect, it } from 'vitest';

import { SortOrders } from '^/domain/relation/definitions';
import explore from '^/domain/relation/exploreAggregated';

import { DATABASES, REQUESTERS, VALUES } from './fixtures';

beforeEach(async () =>
{
    await DATABASES.withEverything();
});

describe('domain/relation/exploreAggregated', () =>
{
    it('should explore relations based on popularity', async () =>
    {
        const relations = await explore(REQUESTERS.FIRST, SortOrders.POPULAR, VALUES.RANGE);
        expect(relations).toHaveLength(3);
        expect(relations[0].following?.id).toBe(VALUES.IDS.CREATOR5);
        expect(relations[1].following?.id).toBe(VALUES.IDS.CREATOR4);
        expect(relations[2].following?.id).toBe(VALUES.IDS.CREATOR6);
    });

    it('should explore relations based on recent', async () =>
    {
        const relations = await explore(REQUESTERS.FIRST, SortOrders.RECENT, VALUES.RANGE);
        expect(relations).toHaveLength(3);
        expect(relations[0].following?.id).toBe(VALUES.IDS.CREATOR4);
        expect(relations[1].following?.id).toBe(VALUES.IDS.CREATOR6);
        expect(relations[2].following?.id).toBe(VALUES.IDS.CREATOR5);
    });

    it('should find no relations based on search', async () =>
    {
        const relations = await explore(REQUESTERS.FIRST, SortOrders.POPULAR, VALUES.RANGE, 'or2');
        expect(relations).toHaveLength(0);
    });

    it('should find relations based on search full name', async () =>
    {
        const relations = await explore(REQUESTERS.FIRST, SortOrders.POPULAR, VALUES.RANGE, 'or 4');
        expect(relations).toHaveLength(1);
        expect(relations[0].following?.id).toBe(VALUES.IDS.CREATOR4);
    });

    it('should find relations based on search nickname', async () =>
    {
        const relations = await explore(REQUESTERS.FIRST, SortOrders.POPULAR, VALUES.RANGE, 'creator4');
        expect(relations).toHaveLength(1);
        expect(relations[0].following?.id).toBe(VALUES.IDS.CREATOR4);
    });

    it('should find relations based on search full name and nickname', async () =>
    {
        const relations = await explore(REQUESTERS.FIRST, SortOrders.POPULAR, VALUES.RANGE, 'five');
        expect(relations).toHaveLength(2);
        expect(relations[0].following?.id).toBe(VALUES.IDS.CREATOR5);
        expect(relations[1].following?.id).toBe(VALUES.IDS.CREATOR6);
    });
});
