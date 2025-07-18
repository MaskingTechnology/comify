
import { beforeEach, describe, expect, it } from 'vitest';

import getByOrigin from '^/domain/tenant/getByOrigin';

import { DATABASES, VALUES } from './fixtures';

beforeEach(async () =>
{
    await DATABASES.tenantsAndOrigins();
});

describe('domain/tenant/getByOrigin', () =>
{
    it('should get an existing', async () =>
    {
        const tenant = await getByOrigin(VALUES.NAMES.ORIGIN1);

        expect(tenant).toBeDefined();
        expect(tenant.id).toEqual(VALUES.IDS.TENANT1);
    });

    it('should NOT get an unknown tenant', async () =>
    {
        const tenant = await getByOrigin(VALUES.NAMES.UNKNOWN);

        expect(tenant).toBeUndefined();
    });
});
