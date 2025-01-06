
import { beforeEach, describe, expect, it } from 'vitest';

import PostNotFound from '^/domain/post/PostNotFound';
import create from '^/domain/reaction/create/feature';
import InvalidReaction from '^/domain/reaction/create/InvalidReaction';
import { RECORD_TYPE as REACTION_RECORD_TYPE } from '^/domain/reaction/definitions';
import ReactionNotFound from '^/domain/reaction/ReactionNotFound';

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
    it('should fail when post and reaction ids are missing', async () =>
    {
        const promise = create(REQUESTERS.OWNER.id, VALUES.IDS.POST_MISSING, VALUES.IDS.REACTION_MISSING, undefined, VALUES.IDS.COMMENT);
        await expect(promise).rejects.toThrow(InvalidReaction);
    });

    it('should fail when comic and comment ids are missing', async () =>
    {
        const promise = create(REQUESTERS.OWNER.id, VALUES.IDS.POST_EXISTING, VALUES.IDS.COMIC_MISSING, VALUES.IDS.COMMENT_MISSING);
        await expect(promise).rejects.toThrow(InvalidReaction);
    });

    it('should rollback created data at non-existing post comment reaction', async () =>
    {
        // This should fail at the last action when incrementing post's reaction count
        const promise = create(REQUESTERS.OWNER.id, VALUES.IDS.POST_NOT_EXISTING, undefined, VALUES.MESSAGES.VALID_COMMENT);
        await expect(promise).rejects.toThrow(PostNotFound);

        const reactions = await database.searchRecords(REACTION_RECORD_TYPE, { postId: { 'EQUALS': undefined } });
        expect(reactions).toHaveLength(5);
    });

    it('should rollback created data at non-existing reaction comment reaction', async () =>
    {
        // This should fail at the last action when incrementing reaction's reaction count
        const promise = create(REQUESTERS.OWNER.id, undefined, VALUES.IDS.REACTION_NOT_EXISTING, undefined, VALUES.MESSAGES.VALID_COMMENT);
        await expect(promise).rejects.toThrow(ReactionNotFound);

        const reactions = await database.searchRecords(REACTION_RECORD_TYPE, { reactionId: { 'EQUALS': undefined } });
        expect(reactions).toHaveLength(5);
    });
});
