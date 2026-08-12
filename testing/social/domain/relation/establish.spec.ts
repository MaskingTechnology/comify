
import { beforeAll, afterAll, beforeEach, describe, expect, it } from 'vitest';

import database from '@comify/common/integrations/database';
import eventBroker from '@comify/common/integrations/eventBroker';

import { RECORD_TYPE as RELATION_RECORD_TYPE, type Record } from '@comify/social/domain/relation';
import establish, { RelationAlreadyExists } from '@comify/social/domain/relation/establish';

import { DATABASES, QUERIES, REQUESTERS, TENANTS, VALUES } from './fixtures';

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
    await DATABASES.withEverything();
});

describe('domain/relation/establish', () =>
{
    it('should establish a relation', async () =>
    {
        await establish(REQUESTERS.SECOND, VALUES.IDS.CREATOR1);

        const result = await database.readRecord<Record>(RELATION_RECORD_TYPE, QUERIES.EXISTING_RELATION);

        expect(result?.id).toBeDefined();
    });

    it('should NOT establish a duplicate relation', async () =>
    {
        const promise = establish(REQUESTERS.FIRST, VALUES.IDS.CREATOR2);

        await expect(promise).rejects.toStrictEqual(new RelationAlreadyExists());
    });
});
