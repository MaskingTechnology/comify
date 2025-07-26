
import { beforeEach, describe, expect, it } from 'vitest';

import getByOriginConverted from '^/domain/tenant/getByOriginConverted';

import { DATABASES, VALUES } from './fixtures';

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
