
import { beforeAll, afterAll, beforeEach, describe, expect, it } from 'vitest';

import getByOrigin, { TenantNotFound } from '^/domain/tenant/getByOrigin';
import database from '^/integrations/database';

import { DATABASES, VALUES } from './fixtures';

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
    await DATABASES.tenants();
});

describe('domain/tenant/getByOrigin', () =>
{
    it('Should reject an invalid origin', async () =>
    {
        const promise = getByOrigin(VALUES.ORIGINS.UNKNOWN);

        await expect(promise).rejects.toThrow(TenantNotFound);
    });

    it('Should return a multi-origin tenant identified by a single origin', async () =>
    {
        const tenant = await getByOrigin(VALUES.ORIGINS.FIRST);

        expect(tenant.id).toEqual(VALUES.IDS.TENANT1);
        expect(tenant.origin).toEqual(VALUES.ORIGINS.FIRST);
    });
});
