
import { describe, expect, it } from 'vitest';
import { NOT_EXISTING_POST_ID, RATED_POST_ID, RATING_RECORD_TYPE, UNRATED_POST_ID, createDatabase, johnDoe, ratingQuery, toggleRating } from './_fixtures/toggleRating.fixture';

describe('domain/post/toggleRating', () =>
{
    it('should add a rating', async () =>
    {
        await createDatabase();

        const isRated = await toggleRating(johnDoe, UNRATED_POST_ID);

        expect(isRated).toBe(true);
    });

    it('should remove a rating', async () =>
    {
        await createDatabase();

        const isRated = await toggleRating(johnDoe, RATED_POST_ID);

        expect(isRated).toBe(false);
    });

    it('should rollback created data at failure', async () =>
    {
        const database = await createDatabase();

        // This should fail at the last action when changing the post's rating count
        const promise = toggleRating(johnDoe, NOT_EXISTING_POST_ID);
        await expect(promise).rejects.toThrow('Record not found');

        const rating = await database.findRecord(RATING_RECORD_TYPE, ratingQuery);
        expect(rating).toBe(undefined);
    });
});
