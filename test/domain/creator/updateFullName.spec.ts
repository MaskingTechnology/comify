
import { beforeEach, describe, expect, it } from 'vitest';

import { RECORD_TYPE as CREATOR_RECORD_TYPE } from '^/domain/creator/definitions';
import updateFullName from '^/domain/creator/updateFullName/feature';

import database from '^/integrations/database/module';

import { DATABASES, REQUESTERS, VALUES } from './fixtures';

beforeEach(async () =>
{
    await DATABASES.withEverything();
});

describe('domain/creator/updateFullName', () =>
{
    it('should update the fullname', async () =>
    {
        await updateFullName(REQUESTERS.CREATOR, VALUES.FULL_NAMES.NEW);

        const creator = await database.readRecord(CREATOR_RECORD_TYPE, REQUESTERS.CREATOR.id);
        expect(creator?.fullName).toBe(VALUES.FULL_NAMES.NEW);
    });
});
