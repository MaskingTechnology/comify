
import { beforeEach, describe, expect, it } from 'vitest';

import createReaction from '^/domain/reaction/create/feature';
import InvalidReaction from '^/domain/reaction/create/InvalidReaction';

import { DATABASES, FILE_STORES, REQUESTERS, VALUES } from './fixtures';

beforeEach(async () =>
{
    await Promise.all([
        DATABASES.withEverything(),
        FILE_STORES.withImage()
    ]);
});

describe('domain/reaction/create', () =>
{
    it('should fail when comic and comment ids are missing', async () =>
    {
        const promise = createReaction(REQUESTERS.OWNER.id, VALUES.IDS.POST_EXISTING, VALUES.IDS.COMIC_MISSING, VALUES.IDS.COMMENT_MISSING);
        await expect(promise).rejects.toThrow(InvalidReaction);
    });
});
