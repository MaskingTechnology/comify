
import { beforeEach, describe, expect, it } from 'vitest';

import toggle from '^/domain/rating/toggle';

import { DATABASES, REQUESTERS, VALUES } from './fixtures';

beforeEach(async () =>
{
    await DATABASES.withRatings();
});

describe('domain/post/toggleRating', () =>
{
    it('should add a rating', async () =>
    {
        const isRated = await toggle(REQUESTERS.CREATOR1, VALUES.IDS.POST_UNRATED);
        expect(isRated).toBeTruthy();
    });

    it('should remove a rating', async () =>
    {
        const isRated = await toggle(REQUESTERS.CREATOR1, VALUES.IDS.POST_RATED);
        expect(isRated).toBeFalsy();
    });
});
