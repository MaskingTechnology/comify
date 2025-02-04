
import { beforeEach, describe, expect, it } from 'vitest';

import update, { InvalidRating } from '^/domain/rating/toggle';

import { DATABASES, REQUESTERS, VALUES } from './fixtures';

beforeEach(async () =>
{
    await DATABASES.empty();
});

describe('domain/rating/update', () =>
{
    it('should not toggle without post id and reaction id', async () =>
    {
        const promise = update(REQUESTERS.CREATOR, VALUES.IDS.POST_EMPTY, VALUES.IDS.REACTION_EMPTY);

        await expect(promise).rejects.toThrow(InvalidRating);
    });

    it('should not toggle without invalid post id', async () =>
    {
        const promise = update(REQUESTERS.CREATOR, VALUES.IDS.POST_INVALID, VALUES.IDS.REACTION_EMPTY);

        await expect(promise).rejects.toThrow(InvalidRating);
    });

    it('should not toggle without invalid comment id', async () =>
    {
        const promise = update(REQUESTERS.CREATOR, VALUES.IDS.POST_EMPTY, VALUES.IDS.REACTION_INVALID);

        await expect(promise).rejects.toThrow(InvalidRating);
    });
});
