
import { beforeAll, afterAll, beforeEach, describe, expect, it } from 'vitest';

import database from '^/integrations/database';
import eventBroker from '^/integrations/eventBroker';
import fileStore from '^/integrations/fileStore';

import login from '^/domain/authentication/login';
import { TooManySimilarNicknames } from '^/domain/creator/generateNickname';

import { DATABASES, FILE_STORES, HTTP_CLIENTS, IDENTITIES, TENANTS, VALUES } from './fixtures';

beforeAll(async () =>
{
    await Promise.all([
        database.connect(),
        eventBroker.connect(),
        fileStore.connect()
    ]);
});

afterAll(async () =>
{
    await Promise.all([
        database.disconnect(),
        eventBroker.disconnect(),
        fileStore.disconnect()
    ]);
});

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
    describe('.login(tenant, identity)', () =>
    {
        it('should login with an existing email', async () =>
        {
            const requester = await login(TENANTS.default, IDENTITIES.EXISTING);

            expect(requester.nickname).toBe(VALUES.NICKNAMES.FIRST);
        });

        it('should register without a nickname', async () =>
        {
            const requester = await login(TENANTS.default, IDENTITIES.NO_NICKNAME);

            expect(requester.nickname).toBe(VALUES.NICKNAMES.FROM_FULL_NAME);
        });

        it('should register with a duplicate nickname', async () =>
        {
            const requester = await login(TENANTS.default, IDENTITIES.DUPLICATE_NICKNAME);

            expect(requester.nickname).toBe(VALUES.NICKNAMES.DEDUPLICATED);
        });

        it('should register with multiple occurrences of nickname', async () =>
        {
            const requester = await login(TENANTS.default, IDENTITIES.MULTIPLE_OCCURRENCES_NICKNAME);

            expect(requester.nickname).toBe(VALUES.NICKNAMES.NEXT_OCCURRED);
        });

        it('should NOT register with too many occurrences nickname', async () =>
        {
            const promise = login(TENANTS.default, IDENTITIES.TOO_MANY_SIMILAR_NICKNAMES);

            await expect(promise).rejects.toStrictEqual(new TooManySimilarNicknames());
        });

        it('should register with spaces in nickname', async () =>
        {
            const requester = await login(TENANTS.default, IDENTITIES.SPACED_NICKNAME);

            expect(requester.nickname).toBe(VALUES.NICKNAMES.DESPACED);
        });

        it('should register with underscores in nickname', async () =>
        {
            const requester = await login(TENANTS.default, IDENTITIES.UNDERSCORED_NICKNAME);

            expect(requester.nickname).toBe(VALUES.NICKNAMES.DEUNDERSCORED);
        });

        it('should register with a valid profile picture', async () =>
        {
            const requester = await login(TENANTS.default, IDENTITIES.WITH_PICTURE);
            
            expect(requester.nickname).toBe(VALUES.NICKNAMES.WITH_PICTURE);
        });
    });
});
