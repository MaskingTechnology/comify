
import { describe, expect, it } from 'vitest';
import { CREATOR0, CREATOR1, CREATOR2, REQUESTER1, getFollowers } from './_fixtures/relation.fixture';

describe('domain/relation/getFollowing', () =>
{
    it('should retrieve relations for a followee', async () =>
    {
        const relations = await getFollowers(REQUESTER1, CREATOR2);

        expect(relations.length).toBe(2);
        expect(relations[0].following?.id).toBe(CREATOR0);
        expect(relations[1].following?.id).toBe(CREATOR1);
    });
});
