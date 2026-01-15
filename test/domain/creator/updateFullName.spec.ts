
import { beforeAll, afterAll, beforeEach, describe, expect, it } from 'vitest';

import database from '^/integrations/database';

import { RECORD_TYPE as CREATOR_RECORD_TYPE } from '^/domain/creator';
import updateFullName, { InvalidFullName } from '^/domain/creator/updateFullName';

import { DATABASES, REQUESTERS, VALUES } from './fixtures';

beforeAll(async () =>
{
    await database.connect();
});

afterAll(async () =>
{
    await database.disconnect();
});

beforeEach(async () =>
{
    await DATABASES.withEverything();
});

describe('domain/creator/updateFullName', () =>
{
    it('should update the full name', async () =>
    {
        await updateFullName(REQUESTERS.CREATOR, VALUES.FULL_NAMES.NEW);

        const creator = await database.readRecord(CREATOR_RECORD_TYPE, { id: { EQUALS: REQUESTERS.CREATOR.id } });

        expect(creator?.fullName).toBe(VALUES.FULL_NAMES.NEW);
    });

    it('should not accept an invalid full name', async () =>
    {
        const promise = updateFullName(REQUESTERS.CREATOR, VALUES.FULL_NAMES.INVALID);
        
        await expect(promise).rejects.toThrow(InvalidFullName);
    });
});
