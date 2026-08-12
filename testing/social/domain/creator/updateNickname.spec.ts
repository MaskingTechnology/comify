
import { beforeAll, afterAll, beforeEach, describe, expect, it } from 'vitest';

import database from '@comify/common/integrations/database';
import eventBroker from '@comify/common/integrations/eventBroker';

import { RECORD_TYPE as CREATOR_RECORD_TYPE, type Record } from '@comify/social/domain/creator';
import updateNickname, { NicknameAlreadyExists } from '@comify/social/domain/creator/updateNickname';

import { DATABASES, REQUESTERS, TENANTS, VALUES } from './fixtures';

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

describe('domain/creator/updateNickname', () =>
{
    it('should update the nickname', async () =>
    {
        await updateNickname(REQUESTERS.CREATOR, VALUES.NICKNAMES.NEW);

        const creator = await database.readRecord<Record>(CREATOR_RECORD_TYPE, { id: { EQUALS: REQUESTERS.CREATOR.principalId } });

        expect(creator?.nickname).toBe(VALUES.NICKNAMES.NEW);
    });

    it('should NOT update the nickname because of a duplicate', async () =>
    {
        const promise = updateNickname(REQUESTERS.CREATOR, VALUES.NICKNAMES.DUPLICATE);

        await expect(promise).rejects.toThrow(NicknameAlreadyExists);
    });
});
