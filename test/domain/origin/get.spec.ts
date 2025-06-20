
import { beforeEach, describe, expect, it } from 'vitest';

import find from '^/domain/origin/find';

import { DATABASES, VALUES } from './fixtures';

beforeEach(async () =>
{
    await DATABASES.origins();
});

describe('domain/origin/get', () =>
{
    it('should get multiple origin for single tenant', async () =>
    {
        const origin1 = await find(VALUES.ORIGINS.ORIGIN1);
        const origin2 = await find(VALUES.ORIGINS.ORIGIN2);

        expect(origin1).toBeDefined();
        expect(origin1?.tenantId).toBe(VALUES.IDS.TENANT1);

        expect(origin2).toBeDefined();
        expect(origin2?.tenantId).toBe(VALUES.IDS.TENANT1);
    });

    it('should ', async () =>
    {
        const origin = await find(VALUES.ORIGINS.UNKNOWN);

        expect(origin).toBeUndefined();
    });
});
