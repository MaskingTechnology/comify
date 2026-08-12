
import { beforeAll, afterAll, beforeEach, describe, expect, it } from 'vitest';

import database from '@comify/common/integrations/database';
import eventBroker from '@comify/common/integrations/eventBroker';

import toggle from '@comify/social/domain/post.rating/toggle';

import { DATABASES, REQUESTERS, VALUES } from './fixtures';

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
        const result = await toggle(REQUESTERS.CREATOR1, VALUES.IDS.POST_UNRATED);

        expect(result).toBeTruthy();
    });

    it('should remove a rating', async () =>
    {
        const result = await toggle(REQUESTERS.CREATOR1, VALUES.IDS.POST_RATED);

        expect(result).toBeFalsy();
    });
});
