
import { describe, it, expect } from 'vitest';

import login from '../../../src/domain/authentication/login';
import { NICKNAMES, SIGNUPS } from './_fixtures/login.fixture';
import { TooManySimilarNickNames } from '../../../src/domain/creator/errors';

describe('domain/authentication', () =>
{
    describe('.login', () =>
    {
        it('.login with an existing nickname', async () =>
        {
            const creator = await login(SIGNUPS.NAME_NICKNAME_EXISTING);

            expect(creator.nickName).toBe(NICKNAMES.EXISTING_NICKNAME);

        });

        it('.login with a non existing nickname', async () =>
        {
            const creator = await login(SIGNUPS.NAME_NICKNAME_NOT_EXISTING);

            expect(creator.nickName).toBe(NICKNAMES.NON_EXISTING_NICKNAME);

        });

        it('.login with a duplicate nickname', async () =>
        {
            const creator = await login(SIGNUPS.NAME_DUPLICATE_NICKNAME);

            expect(creator.nickName).toBe(NICKNAMES.NAME_DUPLICATE_NICKNAME);
        });

        it('.login with spaces in nickname', async () =>
        {
            const creator = await login(SIGNUPS.NAME_WITH_SPACES_NICKNAME);

            expect(creator.nickName).toBe(NICKNAMES.NAME_SPACED_NICKNAME);
        });

        it('.login with underscores in nickname', async () =>
        {
            const creator = await login(SIGNUPS.NAME_WITH_UNDERSCORES_NICKNAME);

            expect(creator.nickName).toBe(NICKNAMES.NAME_UNDERSCORE_NICKNAME);
        });

        it('.login with spaces & underscores in nickname', async () =>
        {
            const creator = await login(SIGNUPS.NAME_WITH_SPACES_UNDERSCORES_NICKNAME);

            expect(creator.nickName).toBe(NICKNAMES.NAME_SPACES_UNDERSCORES_NICKNAME);
        });

        it('.login with multiple occurences of nickname', async () =>
        {
            const creator = await login(SIGNUPS.NAME_WITH_MULTIPLE_OCCURENCES_NICKNAME);

            expect(creator.nickName).toBe(NICKNAMES.NAME_MULTIPLE_OCCURENCES_NICKNAME);
        });

        it('.login with too many occurences of similar nickname', async () =>
        {
            const creator = login(SIGNUPS.NAME_WITH_TOO_MANY_SIMILAR_NICKNAME);

            expect(creator).rejects.toStrictEqual(new TooManySimilarNickNames());
        });
    });
});
