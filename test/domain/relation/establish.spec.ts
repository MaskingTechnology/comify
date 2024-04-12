
import { describe, expect, it } from 'vitest';
import { CREATOR0_ID, CREATOR1_ID, QUERY_EXISTING_RELATION, QUERY_NON_EXISTING_RELATION, RECORD_TYPE_CREATOR, RECORD_TYPE_RELATION, REQUESTER1, REQUESTER2, RelationAlreadyExists, UNKNOWN_REQUESTER, database, establish } from './_fixtures/relation.fixture';

describe('domain/relation/establish', () =>
{
    it('should establish a relation', async () =>
    {
        await establish(REQUESTER2, CREATOR0_ID);
        const relation = await database.findRecord(RECORD_TYPE_RELATION, QUERY_EXISTING_RELATION);

        expect(relation?.id).toBeDefined();

        const creator1 = await database.readRecord(RECORD_TYPE_CREATOR, REQUESTER2.id);
        expect(creator1.followingCount).toBe(1);

        const creator0 = await database.readRecord(RECORD_TYPE_CREATOR, CREATOR0_ID);
        expect(creator0.followerCount).toBe(1);
    });

    it('should NOT establish a duplicate relation', async () =>
    {
        const promise = establish(REQUESTER1, CREATOR1_ID);

        expect(promise).rejects.toStrictEqual(new RelationAlreadyExists());
    });

    it('Should rollback created data after failure', async () =>
    {
        // This should fail at the action when incrementing the creator's following count
        const promise = establish(UNKNOWN_REQUESTER, CREATOR1_ID);
        await expect(promise).rejects.toThrow('Record not found');

        const creator = await database.readRecord(RECORD_TYPE_CREATOR, CREATOR1_ID);
        expect(creator.followerCount).toBe(0);

        const relation = await database.findRecord(RECORD_TYPE_RELATION, QUERY_NON_EXISTING_RELATION);
        expect(relation).toBeUndefined();
    });
});
