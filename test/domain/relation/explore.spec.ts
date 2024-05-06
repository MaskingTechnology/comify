
import { describe, expect, it } from 'vitest';

import SortOptions from '^/domain/relation/definitions/SortOptions';
import explore from '^/domain/relation/explore';

import { DATABASES, REQUESTERS, VALUES } from './fixtures';

describe('domain/relation/explore', () =>
{
    it('should explore relations based on popularity', async () =>
    {
        await DATABASES.withEverything();

        const relations = await explore(REQUESTERS.FIRST, SortOptions.POPULAR);
        expect(relations).toHaveLength(3);
        expect(relations[0].following?.id).toBe(VALUES.IDS.CREATOR5);
        expect(relations[1].following?.id).toBe(VALUES.IDS.CREATOR4);
        expect(relations[2].following?.id).toBe(VALUES.IDS.CREATOR6);
    });

    it('should explore relations based on recent', async () =>
    {
        await DATABASES.withEverything();

        const relations = await explore(REQUESTERS.FIRST, SortOptions.RECENT);
        expect(relations).toHaveLength(3);
        expect(relations[0].following?.id).toBe(VALUES.IDS.CREATOR4);
        expect(relations[1].following?.id).toBe(VALUES.IDS.CREATOR6);
        expect(relations[2].following?.id).toBe(VALUES.IDS.CREATOR5);
    });

    it('should find no relations based on search', async () =>
    {
        await DATABASES.withEverything();

        const relations = await explore(REQUESTERS.FIRST, SortOptions.POPULAR, 'or2');
        expect(relations).toHaveLength(0);
    });

    it('should find relations based on search full name', async () =>
    {
        await DATABASES.withEverything();

        const relations = await explore(REQUESTERS.FIRST, SortOptions.POPULAR, 'or 4');
        expect(relations).toHaveLength(1);
        expect(relations[0].following?.id).toBe(VALUES.IDS.CREATOR4);
    });

    it('should find relations based on search nickname', async () =>
    {
        await DATABASES.withEverything();

        const relations = await explore(REQUESTERS.FIRST, SortOptions.POPULAR, 'creator4');
        expect(relations).toHaveLength(1);
        expect(relations[0].following?.id).toBe(VALUES.IDS.CREATOR4);
    });

    it('should find relations based on search full name and nickname', async () =>
    {
        await DATABASES.withEverything();

        const relations = await explore(REQUESTERS.FIRST, SortOptions.POPULAR, 'five');
        expect(relations).toHaveLength(2);
        expect(relations[0].following?.id).toBe(VALUES.IDS.CREATOR5);
        expect(relations[1].following?.id).toBe(VALUES.IDS.CREATOR6);
    });
});
