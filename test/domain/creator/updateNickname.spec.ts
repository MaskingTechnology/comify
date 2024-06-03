
import { beforeEach, describe, expect, it } from 'vitest';

import { RECORD_TYPE as CREATOR_RECORD_TYPE } from '^/domain/creator/definitions';
import NicknameAlreadyExists from '^/domain/creator/updateNickname/NicknameAlreadyExists';

import database from '^/integrations/database/module';

import updateNickname from '^/domain/creator/updateNickname/feature';
import { DATABASES, QUERIES, REQUESTERS, VALUES } from './fixtures';

beforeEach(async () =>
{
    await DATABASES.withEverything();
});

describe('domain/creator/updatenickname', () =>
{
    it('should establish a relation', async () =>
    {
        await updateNickname(REQUESTERS.CREATOR, VALUES.NICKNAMES.NEW);

        const creator = await database.findRecord(CREATOR_RECORD_TYPE, QUERIES.EXISTING_NICKNAME);
        expect(creator?.nickname).toBe(VALUES.NICKNAMES.NEW);
    });

    it('should NOT update the nickname because of a duplicate', async () =>
    {
        const promise = updateNickname(REQUESTERS.CREATOR, VALUES.NICKNAMES.DUPLICATE);

        expect(promise).rejects.toStrictEqual(new NicknameAlreadyExists(VALUES.NICKNAMES.DUPLICATE));
    });
});
