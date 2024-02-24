
import { describe, expect, it } from 'vitest';
import { CREATOR0, CREATOR1, RelationAlreadyExists, establish, getFollowers, getFollowing } from './_fixtures/relation.fixture';

describe('domain/relation', () =>
{
    describe('relation', () =>
    {
        it('should establish a relation', async () =>
        {
            const relation = await establish(CREATOR1, CREATOR0);

            expect(relation.id).toBeDefined();
        });

        it('should give an already exists exception', async () =>
        {
            const promise = establish(CREATOR0, CREATOR1);

            expect(promise).rejects.toStrictEqual(new RelationAlreadyExists);
        });

        it('should retrieve a relation for a follower', async () =>
        {
            const relation = await getFollowers(CREATOR0);

            expect(relation[0].follower?.id).toBe(CREATOR1);
        });

        it('should retrieve a relation for a followee', async () =>
        {
            const relation = await getFollowing(CREATOR1);

            expect(relation[0].following?.id).toBe(CREATOR0);
        });
    });
});
