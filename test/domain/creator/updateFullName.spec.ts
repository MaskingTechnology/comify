
import { beforeEach, describe, expect, it } from 'vitest';

import { RECORD_TYPE as CREATOR_RECORD_TYPE } from '^/domain/creator/definitions';

import database from '^/integrations/database/module';

import updateFullname from '^/domain/creator/updateFullName/feature';
import { DATABASES, QUERIES, REQUESTERS, VALUES } from './fixtures';

beforeEach(async () =>
{
    await DATABASES.withEverything();
});

describe('domain/creator/updatefullname', () =>
{
    it('should update the fullname', async () =>
    {
        await updateFullname(REQUESTERS.CREATOR, VALUES.FULL_NAMES.NEW);

        const creator = await database.findRecord(CREATOR_RECORD_TYPE, QUERIES.EXISTING_FULLNAME);
        expect(creator?.fullName).toBe(VALUES.FULL_NAMES.NEW);
    });
});
