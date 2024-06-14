
import { beforeEach, describe, expect, it } from 'vitest';

import InvalidCreator from '^/domain/creator/InvalidCreator';
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
    it('should update the full name', async () =>
    {
        await updateFullName(REQUESTERS.CREATOR, VALUES.FULL_NAMES.NEW);

        const creator = await database.readRecord(CREATOR_RECORD_TYPE, REQUESTERS.CREATOR.id);
        expect(creator?.fullName).toBe(VALUES.FULL_NAMES.NEW);
    });

    it('should not accept an invalid full name', async () =>
    {
        const promise = updateFullName(REQUESTERS.CREATOR, VALUES.FULL_NAMES.INVALID);
        expect(promise).rejects.toThrow(InvalidCreator);
    });
});
