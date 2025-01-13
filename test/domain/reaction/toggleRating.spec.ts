
import { beforeEach, describe, expect, it } from 'vitest';

import { RECORD_TYPE as RATING_RECORD_TYPE } from '^/domain/rating';
import toggleRating from '^/domain/reaction/toggleRating';

import database from '^/integrations/database';

import { DATABASES, QUERIES, REQUESTERS, VALUES } from './fixtures';

beforeEach(async () =>
{
    await DATABASES.withEverything();
});

describe('domain/post/toggleRating', () =>
{
    it('should add a rating', async () =>
    {
        const isRated = await toggleRating(REQUESTERS.OWNER, VALUES.IDS.REACTION_UNRATED);
        expect(isRated).toBeTruthy();
    });

    it('should remove a rating', async () =>
    {
        const isRated = await toggleRating(REQUESTERS.OWNER, VALUES.IDS.REACTION_RATED);
        expect(isRated).toBeFalsy();
    });

    it('should rollback created data at failure', async () =>
    {
        // This should fail at the last action when changing the post's rating count
        const promise = toggleRating(REQUESTERS.OWNER, VALUES.IDS.REACTION_NOT_EXISTING);
        await expect(promise).rejects.toThrow('Reaction not found');

        const rating = await database.findRecord(RATING_RECORD_TYPE, QUERIES.RATING_NOT_EXISTING);
        expect(rating).toBeUndefined();
    });
});
