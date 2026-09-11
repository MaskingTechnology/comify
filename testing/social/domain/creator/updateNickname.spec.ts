
import { beforeAll, afterAll, beforeEach, describe, expect, it } from 'vitest';

import database from '@comify/common/integrations/database';
import eventBroker from '@comify/common/integrations/events';

import { RECORD_TYPE, type Record } from '@comify/social/domain/creator';
import updateNickname, { NicknameAlreadyExists } from '@comify/social/domain/creator/updateNickname';

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
    it('should update the nickname', async () =>
    {
        const newNickname = 'aaaaaliceee';

        await updateNickname(REQUESTERS.ALICE, newNickname);

        const creator = await database.readRecord<Record>(RECORD_TYPE, { id: { EQUALS: REQUESTERS.ALICE.principalId } });

        expect(creator?.nickname).toBe(newNickname);
    });

    it('should NOT update the nickname because of a duplicate', async () =>
    {
        const duplicateNickname = CREATOR_RECORDS.BOB.nickname;

        const promise = updateNickname(REQUESTERS.ALICE, duplicateNickname);

        await expect(promise).rejects.toThrow(NicknameAlreadyExists);
    });
});
