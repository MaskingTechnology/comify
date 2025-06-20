
import { beforeEach, describe, expect, it } from 'vitest';

import create from '^/domain/origin/create';
import InvalidOrigin from '^/domain/origin/create/InvalidOrigin';

import { DATABASES, VALUES } from './fixtures';

beforeEach(async () =>
{
    await DATABASES.origins();
});

describe('domain/origin/create', () =>
{
    it('should add an new origin', async () =>
    {
        const id = await create(VALUES.IDS.NEW, VALUES.ORIGINS.NEW);

        expect(id).toBeDefined();
    });

    it('should NOT add an existing origin', async () =>
    {
        const promise = create(VALUES.IDS.EXISTING, VALUES.ORIGINS.EXISTING);

        await expect(promise).rejects.toThrow(InvalidOrigin);
    });
});
