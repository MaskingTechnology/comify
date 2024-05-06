
import { beforeEach, describe, expect, it } from 'vitest';

import johnDoe from '^/domain/authentication/johnDoe';
import toggleRating from '^/domain/post/toggleRating';
import { RECORD_TYPE as RATING_RECORD_TYPE } from '^/domain/rating/definitions/constants';

import database from '^/integrations/database/module';

import { DATABASES, QUERIES, VALUES } from './fixtures';

beforeEach(async () =>
{
    await DATABASES.withPostsAndRatings();
});

describe('domain/post/toggleRating', () =>
{
    it('should add a rating', async () =>
    {
        const isRated = await toggleRating(johnDoe, VALUES.IDS.POST_UNRATED);
        expect(isRated).toBeTruthy();
    });

    it('should remove a rating', async () =>
    {
        const isRated = await toggleRating(johnDoe, VALUES.IDS.POST_RATED);
        expect(isRated).toBeFalsy();
    });

    it('should rollback created data at failure', async () =>
    {
        // This should fail at the last action when changing the post's rating count
        const promise = toggleRating(johnDoe, VALUES.IDS.POST_NOT_EXISTING);
        await expect(promise).rejects.toThrow('Record not found');

        const rating = await database.findRecord(RATING_RECORD_TYPE, QUERIES.RATING_NOT_EXISTING_POST);
        expect(rating).toBeUndefined();
    });
});
