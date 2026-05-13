
import { beforeAll, afterAll, beforeEach, describe, expect, it } from 'vitest';

import database from '^/integrations/database';

import getByOrigin, { TenantNotFound } from '^/domain/tenant/getByOrigin';

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
});
