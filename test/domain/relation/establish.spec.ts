
import { describe, expect, it } from 'vitest';
import { CREATOR0, CREATOR1, QUERY_EXISTING_RELATION, QUERY_NON_EXISTING_RELATION, RECORD_TYPE_CREATOR, RECORD_TYPE_RELATION, REQUESTER1, REQUESTER2, RelationAlreadyExists, UNKNOWN_REQUESTER, database, establish } from './_fixtures/relation.fixture';

describe('domain/relation/establish', () =>
{
    it('should establish a relation', async () =>
    {
        await establish(REQUESTER2, CREATOR0);
        const relation = await database.findRecord(RECORD_TYPE_RELATION, QUERY_EXISTING_RELATION);

        expect(relation?.id).toBeDefined();
    });

    it('should NOT establish a duplicate relation', async () =>
    {
        const promise = establish(REQUESTER1, CREATOR1);

        expect(promise).rejects.toStrictEqual(new RelationAlreadyExists);
    });

    it('Should rollback created data after failure', async () =>
    {
        const promise = establish(UNKNOWN_REQUESTER, CREATOR1);

        expect(promise).rejects.toThrow('Record not found');

        const creator = await database.readRecord(RECORD_TYPE_CREATOR, CREATOR0);
        const relation = await database.findRecord(RECORD_TYPE_RELATION, QUERY_NON_EXISTING_RELATION);

        expect(relation).toBeUndefined;
        expect(creator.followerCount).toBe(1);
    });
});
