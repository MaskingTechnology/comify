
import { beforeEach, describe, expect, it } from 'vitest';

import getByOrigin, { TenantNotFound } from '^/domain/tenant/getByOrigin';

import { DATABASES, VALUES } from './fixtures';

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
