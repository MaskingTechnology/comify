
import { describe, it, expect } from 'vitest';

import login from '../../../src/domain/authentication/login';
import { NICKNAMES, SIGNUPS } from './_fixtures/login.fixture';

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
    });
});
