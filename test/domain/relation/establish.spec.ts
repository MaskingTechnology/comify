
import { beforeEach, describe, expect, it } from 'vitest';

import { RECORD_TYPE as RELATION_RECORD_TYPE } from '^/domain/relation';
import establish, { RelationAlreadyExists } from '^/domain/relation/establish';

import database from '^/integrations/database';

import { DATABASES, QUERIES, REQUESTERS, TENANTS, VALUES } from './fixtures';

beforeEach(async () =>
{
    await DATABASES.withEverything();
});

describe('domain/relation/establish', () =>
{
    it('should establish a relation', async () =>
    {
        await establish(TENANTS.default, REQUESTERS.SECOND, VALUES.IDS.CREATOR1);

        const relation = await database.findRecord(RELATION_RECORD_TYPE, QUERIES.EXISTING_RELATION);
        expect(relation?.id).toBeDefined();
    });

    it('should NOT establish a duplicate relation', async () =>
    {
        const promise = establish(TENANTS.default, REQUESTERS.FIRST, VALUES.IDS.CREATOR2);

        await expect(promise).rejects.toStrictEqual(new RelationAlreadyExists());
    });
});
