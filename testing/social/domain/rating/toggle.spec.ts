
import { beforeAll, afterAll, beforeEach, describe, expect, it } from 'vitest';

import database from '^/integrations/database';
import eventBroker from '^/integrations/eventBroker';

import toggle from '^/domain/rating/toggle';

import { DATABASES, REQUESTERS, TENANTS, VALUES } from './fixtures';

beforeAll(async () =>
{
    await Promise.all([
        database.connect(),
        eventBroker.connect()
    ]);
});

afterAll(async () =>
{
    await Promise.all([
        database.disconnect(),
        eventBroker.disconnect()
    ]);
});

beforeEach(async () =>
{
    await DATABASES.withRatings();
});

describe('domain/post/toggleRating', () =>
{
    it('should add a rating', async () =>
    {
        const isRated = await toggle(TENANTS.default, REQUESTERS.CREATOR1, VALUES.IDS.POST_UNRATED);

        expect(isRated).toBeTruthy();
    });

    it('should remove a rating', async () =>
    {
        const isRated = await toggle(TENANTS.default, REQUESTERS.CREATOR1, VALUES.IDS.POST_RATED);
        
        expect(isRated).toBeFalsy();
    });
});
