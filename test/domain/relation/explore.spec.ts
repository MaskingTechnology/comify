
import { describe, expect, it } from 'vitest';
import { CREATOR3, CREATOR4, CREATOR5, REQUESTER1, SortOptions, explore } from './_fixtures/relation.fixture';

describe('domain/relation/explore', () =>
{
    it('should explore relations based on popularity', async () =>
    {
        const relations = await explore(REQUESTER1, SortOptions.POPULAR, undefined);

        expect(relations.length).toBe(3);
        expect(relations[0].following?.id).toBe(CREATOR4);
        expect(relations[1].following?.id).toBe(CREATOR3);
        expect(relations[2].following?.id).toBe(CREATOR5);
        expect(relations[0].follower).toBeUndefined();
    });

    it('should explore relations based on recent', async () =>
    {
        const relations = await explore(REQUESTER1, SortOptions.RECENT, undefined);

        expect(relations.length).toBe(3);
        expect(relations[0].following?.id).toBe(CREATOR3);
        expect(relations[1].following?.id).toBe(CREATOR5);
        expect(relations[2].following?.id).toBe(CREATOR4);
    });

    it('should find no relations based on search', async () =>
    {
        const relations = await explore(REQUESTER1, SortOptions.POPULAR, 'bax');
        expect(relations[0]).toBeUndefined();
    });

    it('should find relations based on search fullname', async () =>
    {
        const relations = await explore(REQUESTER1, SortOptions.POPULAR, 'Paul');
        expect(relations.length).toBe(1);
        expect(relations[0].following?.id).toBe(CREATOR4);
    });

    it('should find relations based on search nickname', async () =>
    {
        const relations = await explore(REQUESTER1, SortOptions.POPULAR, 'Pic');
        expect(relations.length).toBe(2);
        expect(relations[0].following?.id).toBe(CREATOR4);
        expect(relations[1].following?.id).toBe(CREATOR5);
    });

    it('should find relations based on search fullname and nickname', async () =>
    {
        const relations = await explore(REQUESTER1, SortOptions.POPULAR, 'Bas');
        expect(relations.length).toBe(2);
        expect(relations[0].following?.id).toBe(CREATOR3);
        expect(relations[1].following?.id).toBe(CREATOR5);
    });
});
