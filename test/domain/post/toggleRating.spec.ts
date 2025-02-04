
import { beforeEach, describe, expect, it } from 'vitest';

import { PostNotFound } from '^/domain/post';
import toggleRating from '^/domain/post/toggleRating';
import { RECORD_TYPE } from '^/domain/rating';

import database from '^/integrations/database';

import { DATABASES, QUERIES, REQUESTERS, VALUES } from './fixtures';

beforeEach(async () =>
{
    await DATABASES.withPostsAndRatings();
});

describe('domain/post/toggleRating', () =>
{
    it('should add a rating', async () =>
    {
        const isRated = await toggleRating(REQUESTERS.CREATOR1, VALUES.IDS.POST_UNRATED);
        expect(isRated).toBeTruthy();
    });

    it('should remove a rating', async () =>
    {
        const isRated = await toggleRating(REQUESTERS.CREATOR1, VALUES.IDS.POST_RATED);
        expect(isRated).toBeFalsy();
    });

    it('should rollback created data at failure', async () =>
    {
        // This should fail at the last action when changing the post's rating count
        const promise = toggleRating(REQUESTERS.CREATOR1, VALUES.IDS.POST_NOT_EXISTING);
        await expect(promise).rejects.toThrow(PostNotFound);

        const rating = await database.findRecord(RECORD_TYPE, QUERIES.RATING_NOT_EXISTING_POST);
        expect(rating).toBeUndefined();
    });
});
