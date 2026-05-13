
import { beforeAll, afterAll, beforeEach, describe, expect, it } from 'vitest';

import database from '^/integrations/database';

import { RECORD_TYPE as CREATOR_RECORD_TYPE } from '^/domain/creator';
import updateNickname, { NicknameAlreadyExists } from '^/domain/creator/updateNickname';

import { DATABASES, REQUESTERS, TENANTS, VALUES } from './fixtures';

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

describe('domain/creator/updateNickname', () =>
{
    it('should update the nickname', async () =>
    {
        await updateNickname(TENANTS.default, REQUESTERS.CREATOR, VALUES.NICKNAMES.NEW);

        const creator = await database.readRecord(CREATOR_RECORD_TYPE, { id: { EQUALS: REQUESTERS.CREATOR.id } });

        expect(creator?.nickname).toBe(VALUES.NICKNAMES.NEW);
    });

    it('should NOT update the nickname because of a duplicate', async () =>
    {
        const promise = updateNickname(TENANTS.default, REQUESTERS.CREATOR, VALUES.NICKNAMES.DUPLICATE);
        
        await expect(promise).rejects.toThrow(NicknameAlreadyExists);
    });
});
