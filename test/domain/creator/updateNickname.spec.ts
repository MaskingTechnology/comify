
import { beforeEach, describe, expect, it } from 'vitest';

import { RECORD_TYPE as CREATOR_RECORD_TYPE } from '^/domain/creator/definitions';
import NicknameAlreadyExists from '^/domain/creator/updateNickname/NicknameAlreadyExists';
import updateNickname from '^/domain/creator/updateNickname/feature';

import database from '^/integrations/database/module';

import { DATABASES, REQUESTERS, VALUES } from './fixtures';

beforeEach(async () =>
{
    await DATABASES.withEverything();
});

describe('domain/creator/updateNickname', () =>
{
    it('should update the nickname', async () =>
    {
        await updateNickname(REQUESTERS.CREATOR, VALUES.NICKNAMES.NEW);

        const creator = await database.readRecord(CREATOR_RECORD_TYPE, REQUESTERS.CREATOR.id);
        expect(creator?.nickname).toBe(VALUES.NICKNAMES.NEW);
    });

    it('should NOT update the nickname because of a duplicate', async () =>
    {
        const promise = updateNickname(REQUESTERS.CREATOR, VALUES.NICKNAMES.DUPLICATE);

        expect(promise).rejects.toStrictEqual(new NicknameAlreadyExists(VALUES.NICKNAMES.DUPLICATE));
    });
});
