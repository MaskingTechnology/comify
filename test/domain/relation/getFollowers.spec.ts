
import { describe, expect, it } from 'vitest';
import { CREATOR0, CREATOR1, CREATOR2, getFollowing } from './_fixtures/relation.fixture';

describe('domain/relation/getFollowers', () =>
{
    it('should retrieve relations for a follower', async () =>
    {
        const relations = await getFollowing(CREATOR0);

        expect(relations.length).toBe(2);
        expect(relations[0].following?.id).toBe(CREATOR1);
        expect(relations[1].following?.id).toBe(CREATOR2);
    });
});
