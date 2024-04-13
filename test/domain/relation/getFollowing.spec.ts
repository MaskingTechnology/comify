
import { describe, expect, it } from 'vitest';
import { CREATOR0_ID, CREATOR1_ID, CREATOR2_ID, REQUESTER1, getFollowing } from './_fixtures/relation.fixture';

describe('domain/relation/getFollowing', () =>
{
    it('should retrieve relations for a follower', async () =>
    {
        const relations = await getFollowing(REQUESTER1, CREATOR0_ID);

        expect(relations.length).toBe(2);
        expect(relations[0].following?.id).toBe(CREATOR1_ID);
        expect(relations[1].following?.id).toBe(CREATOR2_ID);
    });
});
