
import { describe, expect, it } from 'vitest';
import { RATED_POST_ID, UNRATED_POST_ID, createDatabase, johnDoe, toggleRating } from './_fixtures/toggleRating.fixture';

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
});
