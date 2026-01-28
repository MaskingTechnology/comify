
import { beforeAll, afterAll, beforeEach, describe, expect, it } from 'vitest';

import database from '^/integrations/database';

import getByOriginConverted from '^/domain/tenant/getByOriginConverted';

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

describe('domain/tenant/getByOriginConverted', () =>
{
    it('Should return a multi-origin tenant identified by a single origin', async () =>
    {
        const tenant = await getByOriginConverted(VALUES.ORIGINS.FIRST);

        expect(tenant.id).toEqual(VALUES.IDS.TENANT1);
        expect(tenant.origin).toEqual(VALUES.ORIGINS.FIRST);
    });
});
