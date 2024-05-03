
import { describe, expect, it } from 'vitest';
import { CREATOR3_ID, CREATOR4_ID, CREATOR5_ID, REQUESTER1, SortOptions, explore } from './_fixtures/relation.fixture';

describe('domain/relation/explore', () =>
{
    it('should explore relations based on popularity', async () =>
    {
        const relations = await explore(REQUESTER1, SortOptions.POPULAR);

        expect(relations.length).toBe(3);
        expect(relations[0].following?.id).toBe(CREATOR4_ID);
        expect(relations[1].following?.id).toBe(CREATOR3_ID);
        expect(relations[2].following?.id).toBe(CREATOR5_ID);
        expect(relations[0].follower).toBeUndefined();
    });

    it('should explore relations based on recent', async () =>
    {
        const relations = await explore(REQUESTER1, SortOptions.RECENT);

        expect(relations.length).toBe(3);
        expect(relations[0].following?.id).toBe(CREATOR3_ID);
        expect(relations[1].following?.id).toBe(CREATOR5_ID);
        expect(relations[2].following?.id).toBe(CREATOR4_ID);
    });

    it('should find no relations based on search', async () =>
    {
        const relations = await explore(REQUESTER1, SortOptions.POPULAR, 'or2');
        expect(relations[0]).toBeUndefined();
    });

    it('should find relations based on search full name', async () =>
    {
        const relations = await explore(REQUESTER1, SortOptions.POPULAR, 'or 4');
        expect(relations.length).toBe(1);
        expect(relations[0].following?.id).toBe(CREATOR4_ID);
    });

    it('should find relations based on search nickname', async () =>
    {
        const relations = await explore(REQUESTER1, SortOptions.POPULAR, 'creator4');
        expect(relations.length).toBe(2);
        expect(relations[0].following?.id).toBe(CREATOR4_ID);
        expect(relations[1].following?.id).toBe(CREATOR5_ID);
    });

    it('should find relations based on search full name and nickname', async () =>
    {
        const relations = await explore(REQUESTER1, SortOptions.POPULAR, '_');
        expect(relations.length).toBe(2);
        expect(relations[0].following?.id).toBe(CREATOR3_ID);
        expect(relations[1].following?.id).toBe(CREATOR5_ID);
    });
});
