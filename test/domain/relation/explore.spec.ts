
import { beforeEach, describe, expect, it } from 'vitest';

import { SortOrder } from '^/domain/relation/definitions';
import explore from '^/domain/relation/explore/feature';

import { DATABASES, REQUESTERS, VALUES } from './fixtures';

beforeEach(async () =>
{
    await DATABASES.withEverything();
});

describe('domain/relation/explore', () =>
{
    it('should explore relations based on popularity', async () =>
    {
        const relations = await explore(REQUESTERS.FIRST, SortOrder.POPULAR, undefined, VALUES.LIMIT, VALUES.OFFSET);
        expect(relations).toHaveLength(3);
        expect(relations[0].followingId).toBe(VALUES.IDS.CREATOR5);
        expect(relations[1].followingId).toBe(VALUES.IDS.CREATOR4);
        expect(relations[2].followingId).toBe(VALUES.IDS.CREATOR6);
    });

    it('should explore relations based on recent', async () =>
    {
        const relations = await explore(REQUESTERS.FIRST, SortOrder.RECENT, undefined, VALUES.LIMIT, VALUES.OFFSET);
        expect(relations).toHaveLength(3);
        expect(relations[0].followingId).toBe(VALUES.IDS.CREATOR4);
        expect(relations[1].followingId).toBe(VALUES.IDS.CREATOR6);
        expect(relations[2].followingId).toBe(VALUES.IDS.CREATOR5);
    });

    it('should find no relations based on search', async () =>
    {
        const relations = await explore(REQUESTERS.FIRST, SortOrder.POPULAR, 'or2', VALUES.LIMIT, VALUES.OFFSET);
        expect(relations).toHaveLength(0);
    });

    it('should find relations based on search full name', async () =>
    {
        const relations = await explore(REQUESTERS.FIRST, SortOrder.POPULAR, 'or 4', VALUES.LIMIT, VALUES.OFFSET);
        expect(relations).toHaveLength(1);
        expect(relations[0].followingId).toBe(VALUES.IDS.CREATOR4);
    });

    it('should find relations based on search nickname', async () =>
    {
        const relations = await explore(REQUESTERS.FIRST, SortOrder.POPULAR, 'creator4', VALUES.LIMIT, VALUES.OFFSET);
        expect(relations).toHaveLength(1);
        expect(relations[0].followingId).toBe(VALUES.IDS.CREATOR4);
    });

    it('should find relations based on search full name and nickname', async () =>
    {
        const relations = await explore(REQUESTERS.FIRST, SortOrder.POPULAR, 'five', VALUES.LIMIT, VALUES.OFFSET);
        expect(relations).toHaveLength(2);
        expect(relations[0].followingId).toBe(VALUES.IDS.CREATOR5);
        expect(relations[1].followingId).toBe(VALUES.IDS.CREATOR6);
    });
});
