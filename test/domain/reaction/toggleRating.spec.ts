
import { describe, expect, it } from 'vitest';

import { RECORD_TYPE as RATING_RECORD_TYPE } from '^/domain/rating/definitions/constants';
import toggleRating from '^/domain/reaction/toggleRating';

import { DATABASES, QUERIES, REQUESTERS, VALUES } from './fixtures';

describe('domain/post/toggleRating', () =>
{
    it('should add a rating', async () =>
    {
        await DATABASES.withEverything();

        const isRated = await toggleRating(REQUESTERS.OWNER, VALUES.IDS.REACTION_UNRATED);

        expect(isRated).toBe(true);
    });

    it('should remove a rating', async () =>
    {
        await DATABASES.withEverything();

        const isRated = await toggleRating(REQUESTERS.OWNER, VALUES.IDS.REACTION_RATED);

        expect(isRated).toBe(false);
    });

    it('should rollback created data at failure', async () =>
    {
        const database = await DATABASES.withEverything();

        // This should fail at the last action when changing the post's rating count
        const promise = toggleRating(REQUESTERS.OWNER, VALUES.IDS.REACTION_NOT_EXISTING);
        await expect(promise).rejects.toThrow('Record not found');

        const rating = await database.findRecord(RATING_RECORD_TYPE, QUERIES.RATING_NOT_EXISTING);
        expect(rating).toBe(undefined);
    });
});
