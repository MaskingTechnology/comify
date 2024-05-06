
import { describe, expect, it } from 'vitest';

import { RECORD_TYPE as CREATOR_RECORD_TYPE } from '^/domain/creator/definitions/constants';
import { RECORD_TYPE as RELATION_RECORD_TYPE } from '^/domain/relation/definitions/constants';
import RelationAlreadyExists from '^/domain/relation/errors/RelationAlreadyExists';
import establish from '^/domain/relation/establish';

import { DATABASES, QUERIES, REQUESTERS, VALUES } from './fixtures';

describe('domain/relation/establish', () =>
{
    it('should establish a relation', async () =>
    {
        const database = await DATABASES.withEverything();

        await establish(REQUESTERS.SECOND, VALUES.IDS.CREATOR1);

        const relation = await database.findRecord(RELATION_RECORD_TYPE, QUERIES.EXISTING_RELATION);
        expect(relation?.id).toBeDefined();

        const followingCreator = await database.readRecord(CREATOR_RECORD_TYPE, REQUESTERS.SECOND.id);
        expect(followingCreator.followingCount).toBe(1);

        const followedCreator = await database.readRecord(CREATOR_RECORD_TYPE, VALUES.IDS.CREATOR1);
        expect(followedCreator.followerCount).toBe(1);
    });

    it('should NOT establish a duplicate relation', async () =>
    {
        await DATABASES.withEverything();

        const promise = establish(REQUESTERS.FIRST, VALUES.IDS.CREATOR2);

        expect(promise).rejects.toStrictEqual(new RelationAlreadyExists());
    });

    it('Should rollback created data after failure', async () =>
    {
        const database = await DATABASES.withEverything();

        // This should fail at the action when incrementing the creator's following count
        const promise = establish(REQUESTERS.UNKNOWN, VALUES.IDS.CREATOR2);
        await expect(promise).rejects.toThrow('Record not found');

        const followedCreator = await database.readRecord(CREATOR_RECORD_TYPE, VALUES.IDS.CREATOR2);
        expect(followedCreator.followerCount).toBe(0);

        const relation = await database.findRecord(RELATION_RECORD_TYPE, QUERIES.NON_EXISTING_RELATION);
        expect(relation).toBeUndefined();
    });
});
