
import { describe, expect, it } from 'vitest';
import { CREATOR0, CREATOR1, CREATOR2, REQUESTER1, REQUESTER2, RelationAlreadyExists, establish, getFollowers, getFollowing } from './_fixtures/relation.fixture';

describe('domain/relation/establish', () =>
{
    it('should establish a relation', async () =>
    {
        const relation = await establish(REQUESTER2, CREATOR0);

        expect(relation.id).toBeDefined();
    });

    it('should NOT establish a duplicate relation', async () =>
    {
        const promise = establish(REQUESTER1, CREATOR1);

        expect(promise).rejects.toStrictEqual(new RelationAlreadyExists);
    });

    it('should retrieve relations for a follower', async () =>
    {
        const relations = await getFollowing(CREATOR0);

        expect(relations.length).toBe(2);
        expect(relations[0].following?.id).toBe(CREATOR1);
        expect(relations[1].following?.id).toBe(CREATOR2);
    });

    it('should retrieve relations for a followee', async () =>
    {
        const relations = await getFollowers(CREATOR2);

        expect(relations.length).toBe(2);
        expect(relations[0].follower?.id).toBe(CREATOR0);
        expect(relations[1].follower?.id).toBe(CREATOR1);
    });
});
