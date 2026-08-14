
import { beforeAll, afterAll, beforeEach, describe, expect, it } from 'vitest';

import type { Identity } from '@theshelf/authentication';

import database from '@comify/common/integrations/database';
import eventBroker from '@comify/common/integrations/eventBroker';
import fileStore from '@comify/common/integrations/fileStore';

import login from '@comify/social/security/authentication/login';

import getCreatorById from '@comify/social/domain/creator/getById';

import { IDENTITIES, TENANTS, CREATOR_RECORDS, fullySeedCreators } from '../../fixtures';

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
    await fullySeedCreators();
});

describe('index', () =>
{
    it('should login with an existing account', async () =>
    {
        const requester = await login(TENANTS.ABCD, IDENTITIES.ALICE);

        const creator = await getCreatorById(requester.tenantId, requester.principalId);

        expect(creator.nickname).toBe(CREATOR_RECORDS.ALICE.nickname);
    });

    it('should login with an non-existing account', async () =>
    {
        const identity: Identity = {
            name: 'New Creator',
            nickname: 'newcreator',
            email: 'new@example.com',
            picture: undefined,
            email_verified: false
        };

        const requester = await login(TENANTS.ABCD, identity);

        const creator = await getCreatorById(requester.tenantId, requester.principalId);

        expect(creator.nickname).toBe(identity.nickname);
    });
});
