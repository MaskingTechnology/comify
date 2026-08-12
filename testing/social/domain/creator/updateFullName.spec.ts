
import { beforeAll, afterAll, beforeEach, describe, expect, it } from 'vitest';

import database from '@comify/common/integrations/database';
import eventBroker from '@comify/common/integrations/eventBroker';

import { RECORD_TYPE as CREATOR_RECORD_TYPE, type Record } from '@comify/social/domain/creator';
import updateFullName, { InvalidFullName } from '@comify/social/domain/creator/updateFullName';

import { DATABASES, REQUESTERS, VALUES } from './fixtures';

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

describe('domain/creator/updateFullName', () =>
{
    it('should update the full name', async () =>
    {
        await updateFullName(REQUESTERS.CREATOR, VALUES.FULL_NAMES.NEW);

        const creator = await database.readRecord<Record>(CREATOR_RECORD_TYPE, { id: { EQUALS: REQUESTERS.CREATOR.principalId } });

        expect(creator?.fullName).toBe(VALUES.FULL_NAMES.NEW);
    });

    it('should not accept an invalid full name', async () =>
    {
        const promise = updateFullName(REQUESTERS.CREATOR, VALUES.FULL_NAMES.INVALID);

        await expect(promise).rejects.toThrow(InvalidFullName);
    });
});
