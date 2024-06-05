
import { beforeEach, describe, expect, it } from 'vitest';

import update from '^/domain/rating/update/feature';


import InvalidRating from '^/domain/rating/update/InvalidRating';
import { DATABASES, REQUESTERS, VALUES } from './fixtures';

beforeEach(async () =>
{
    await DATABASES.empty();
});

describe('domain/creator/updateFullName', () =>
{
    it('should not toggle without post id and reaction id', async () =>
    {
        const promise = update(REQUESTERS.CREATOR, VALUES.IDS.POST_EMPTY, VALUES.IDS.REACTION_EMPTY);

        expect(promise).rejects.toThrow(InvalidRating);
    });

    it('should not toggle without invalid post id', async () =>
    {
        const promise = update(REQUESTERS.CREATOR, VALUES.IDS.POST_INVALID, VALUES.IDS.REACTION_EMPTY);

        expect(promise).rejects.toThrow(InvalidRating);
    });

    it('should not toggle without invalid comment id', async () =>
    {
        const promise = update(REQUESTERS.CREATOR, VALUES.IDS.POST_EMPTY, VALUES.IDS.REACTION_INVALID);

        expect(promise).rejects.toThrow(InvalidRating);
    });
});
