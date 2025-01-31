
import { beforeEach, describe, expect, it } from 'vitest';

import { RECORD_TYPE as RELATION_RECORD_TYPE } from '^/domain/relation';
import establish, { InvalidRelation, RelationAlreadyExists } from '^/domain/relation/establish';

import database from '^/integrations/database';

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
    });

    it('should NOT establish a duplicate relation', async () =>
    {
        const promise = establish(REQUESTERS.FIRST, VALUES.IDS.CREATOR2);

        await expect(promise).rejects.toStrictEqual(new RelationAlreadyExists());
    });

    it('should fail when invalid data is provided', async () =>
    {
        const promise = establish(REQUESTERS.FIRST, VALUES.IDS.INVALID);

        await expect(promise).rejects.toThrow(InvalidRelation);
    });
});
