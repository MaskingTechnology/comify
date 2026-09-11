
import { beforeAll, afterAll, beforeEach, describe, expect, it } from 'vitest';

import database from '@comify/common/integrations/database';
import eventBroker from '@comify/common/integrations/events';

import { RECORD_TYPE, type Record } from '@comify/social/domain/relation';
import establish, { RelationAlreadyExists } from '@comify/social/domain/relation/establish';

import { REQUESTERS, CREATOR_RECORDS, fullySeedCreators } from '../../fixtures';

beforeAll(async () =>
{
    await Promise.all([
        database.connect(),
        eventBroker.connect()
    ]);
});

afterAll(async () =>
{
    await Promise.all([
        database.disconnect(),
        eventBroker.disconnect()
    ]);
});

beforeEach(async () =>
{
    await fullySeedCreators();
});

describe('index', () =>
{
    it('should establish a relation', async () =>
    {
        await establish(REQUESTERS.ALICE, CREATOR_RECORDS.BOB.id);

        const record = await database.readRecord<Record>(RECORD_TYPE, {
            followerId: { EQUALS: REQUESTERS.ALICE.principalId },
            followingId: { EQUALS: CREATOR_RECORDS.BOB.id }
        });

        expect(record).toBeDefined();
    });

    it('should NOT establish a duplicate relation', async () =>
    {
        const promise = establish(REQUESTERS.BOB, CREATOR_RECORDS.ALICE.id);

        await expect(promise).rejects.toStrictEqual(new RelationAlreadyExists());
    });
});
