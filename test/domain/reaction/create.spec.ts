
import { beforeEach, describe, expect, it } from 'vitest';

import PostNotFound from '^/domain/post/PostNotFound';
import InvalidReaction from '^/domain/reaction/create/InvalidReaction';
import create from '^/domain/reaction/create/feature';
import { RECORD_TYPE as REACTION_RECORD_TYPE } from '^/domain/reaction/definitions';

import database from '^/integrations/database/module';

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
        const promise = create(REQUESTERS.OWNER.id, VALUES.IDS.POST_EXISTING, VALUES.IDS.COMIC_MISSING, VALUES.IDS.COMMENT_MISSING);
        await expect(promise).rejects.toThrow(InvalidReaction);
    });

    it('should rollback created data at non-existing post comment reaction', async () =>
    {
        // This should fail at the last action when incrementing post's reaction count
        const promise = create(REQUESTERS.OWNER.id, VALUES.IDS.POST_NOT_EXISTING, VALUES.MESSAGES.VALID_COMMENT);
        await expect(promise).rejects.toThrow(PostNotFound);

        const reactions = await database.searchRecords(REACTION_RECORD_TYPE, {});
        expect(reactions).toHaveLength(5);
    });
});
