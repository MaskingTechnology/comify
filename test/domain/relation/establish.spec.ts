
import { beforeEach, describe, expect, it } from 'vitest';

import { RECORD_TYPE as CREATOR_RECORD_TYPE } from '^/domain/creator';
import { RECORD_TYPE as RELATION_RECORD_TYPE } from '^/domain/relation';
import establish, { InvalidRelation, RelationAlreadyExists } from '^/domain/relation/establish';

import database from '^/integrations/database/module';

import { DATABASES, QUERIES, REQUESTERS, VALUES } from './fixtures';

beforeEach(async () =>
{
    await DATABASES.withEverything();
});

describe('domain/relation/establish', () =>
{
    it('should establish a relation', async () =>
    {
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
        const promise = establish(REQUESTERS.FIRST, VALUES.IDS.CREATOR2);

        await expect(promise).rejects.toStrictEqual(new RelationAlreadyExists());
    });

    it('Should rollback created data after failure', async () =>
    {
        // This should fail at the action when incrementing the creator's following count
        const promise = establish(REQUESTERS.UNKNOWN, VALUES.IDS.CREATOR2);
        await expect(promise).rejects.toThrow('Record not found');

        const followedCreator = await database.readRecord(CREATOR_RECORD_TYPE, VALUES.IDS.CREATOR2);
        expect(followedCreator.followerCount).toBe(0);

        const relation = await database.findRecord(RELATION_RECORD_TYPE, QUERIES.NON_EXISTING_RELATION);
        expect(relation).toBeUndefined();
    });

    it('should fail when invalid data is provided', async () =>
    {
        const promise = establish(REQUESTERS.FIRST, VALUES.IDS.INVALID);

        await expect(promise).rejects.toThrow(InvalidRelation);
    });
});
