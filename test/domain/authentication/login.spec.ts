
import { beforeEach, describe, expect, it } from 'vitest';

import login from '^/domain/authentication/login';
import TooManySimilarNicknames from '^/domain/creator/errors/TooManySimilarNicknames';

import { DATABASES, FILE_STORES, HTTP_CLIENTS, IDENTITIES, VALUES } from './fixtures';

beforeEach(async () =>
{
    HTTP_CLIENTS.withProfilePictures();

    await Promise.all([
        DATABASES.withCreators(),
        FILE_STORES.empty()
    ]);
});

describe('domain/authentication', () =>
{
    describe('.login(identity)', () =>
    {
        it('should login with an existing email', async () =>
        {
            const requester = await login(IDENTITIES.EXISTING);
            expect(requester.nickname).toBe(VALUES.NICKNAMES.FIRST);
        });

        it('should register without a nickname', async () =>
        {
            const requester = await login(IDENTITIES.NO_NICKNAME);
            expect(requester.nickname).toBe(VALUES.NICKNAMES.FROM_FULL_NAME);
        });

        it('should register with a duplicate nickname', async () =>
        {
            const requester = await login(IDENTITIES.DUPLICATE_NICKNAME);
            expect(requester.nickname).toBe(VALUES.NICKNAMES.DEDUPLICATED);
        });

        it('should register with multiple occurrences of nickname', async () =>
        {
            const requester = await login(IDENTITIES.MULTIPLE_OCCURRENCES_NICKNAME);
            expect(requester.nickname).toBe(VALUES.NICKNAMES.NEXT_OCCURRED);
        });

        it('should NOT register with too many occurrences nickname', async () =>
        {
            const promise = login(IDENTITIES.TOO_MANY_SIMILAR_NICKNAMES);
            expect(promise).rejects.toStrictEqual(new TooManySimilarNicknames());
        });

        it('should register with spaces in nickname', async () =>
        {
            const requester = await login(IDENTITIES.SPACED_NICKNAME);
            expect(requester.nickname).toBe(VALUES.NICKNAMES.DESPACED);
        });

        it('should register with underscores in nickname', async () =>
        {
            const requester = await login(IDENTITIES.UNDERSCORED_NICKNAME);
            expect(requester.nickname).toBe(VALUES.NICKNAMES.DEUNDERSCORED);
        });

        it('should register with a valid profile picture', async () =>
        {
            const requestor = await login(IDENTITIES.WITH_PICTURE);
            expect(requestor.nickname).toBe(VALUES.NICKNAMES.WITH_PICTURE);
        });
    });
});
