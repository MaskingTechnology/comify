
import { describe, expect, it } from 'vitest';
import { CREATOR3, CREATOR4, CREATOR5, REQUESTER1, UiSortFields, explore } from './_fixtures/relation.fixture';

describe('domain/relation/explore', () =>
{
    it('should explore relations based on popularity', async () =>
    {
        const relations = await explore(REQUESTER1, UiSortFields.POPULAR, undefined);

        expect(relations.length).toBe(3);
        expect(relations[0].following?.id).toBe(CREATOR4);
        expect(relations[1].following?.id).toBe(CREATOR3);
        expect(relations[2].following?.id).toBe(CREATOR5);
        expect(relations[0].follower).toBeUndefined();
    });

    it('should explore relations based on joindAt date', async () =>
    {
        const relations = await explore(REQUESTER1, UiSortFields.RECENT, undefined);

        expect(relations.length).toBe(3);
        expect(relations[0].following?.id).toBe(CREATOR3);
        expect(relations[1].following?.id).toBe(CREATOR5);
        expect(relations[2].following?.id).toBe(CREATOR4);
    });

    it('should find no relations based on search', async () =>
    {
        const relations = await explore(REQUESTER1, UiSortFields.POPULAR, 'bax');
        expect(relations[0]).toBeUndefined();
    });

    it('should explore relations based of fullname search hit', async () =>
    {
        const relations = await explore(REQUESTER1, UiSortFields.POPULAR, 'Paul');
        expect(relations.length).toBe(1);
        expect(relations[0].following?.id).toBe(CREATOR4);
    });

    it('should explore relations based of nickname search hit', async () =>
    {
        const relations = await explore(REQUESTER1, UiSortFields.POPULAR, 'Pic');
        expect(relations.length).toBe(2);
        expect(relations[0].following?.id).toBe(CREATOR4);
        expect(relations[1].following?.id).toBe(CREATOR5);
    });

    it('should explore relations based of fullname and nickname search hit', async () =>
    {
        const relations = await explore(REQUESTER1, UiSortFields.POPULAR, 'Bas');
        expect(relations.length).toBe(2);
        expect(relations[0].following?.id).toBe(CREATOR3);
        expect(relations[1].following?.id).toBe(CREATOR5);
    });
});
