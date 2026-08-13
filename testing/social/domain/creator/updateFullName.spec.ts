
import { beforeAll, afterAll, beforeEach, describe, expect, it } from 'vitest';

import database from '@comify/common/integrations/database';
import eventBroker from '@comify/common/integrations/eventBroker';

import { RECORD_TYPE, type Record } from '@comify/social/domain/creator';
import { FULL_NAME_MAX_LENGTH } from '@comify/social/domain/creator/definitions';
import updateFullName, { InvalidFullName } from '@comify/social/domain/creator/updateFullName';

import { REQUESTERS, CREATOR_RECORDS, seedCreators } from '../../fixtures';

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
    await seedCreators();
});

describe('index', () =>
{
    it('should update the full name', async () =>
    {
        const newName = CREATOR_RECORDS.ALICE.fullName + ' Updated';

        await updateFullName(REQUESTERS.ALICE, newName);

        const record = await database.readRecord<Record>(RECORD_TYPE, { id: { EQUALS: REQUESTERS.ALICE.principalId } });

        expect(record?.fullName).toBe(newName);
    });

    it('should not accept an invalid full name', async () =>
    {
        const invalidName = 'A'.repeat(FULL_NAME_MAX_LENGTH + 1);

        const promise = updateFullName(REQUESTERS.ALICE, invalidName);

        await expect(promise).rejects.toThrow(InvalidFullName);
    });
});
