
import { describe, expect, it } from 'vitest';
import { CREATOR0_ID, CREATOR1_ID, CREATOR2_ID, REQUESTER1, getFollowers } from './_fixtures/relation.fixture';

describe('domain/relation/getFollowers', () =>
{
    it('should retrieve relations for a followee', async () =>
    {
        const relations = await getFollowers(REQUESTER1, CREATOR2_ID);

        expect(relations.length).toBe(2);
        expect(relations[0].following?.id).toBe(CREATOR0_ID);
        expect(relations[1].following?.id).toBe(CREATOR1_ID);
    });
});
