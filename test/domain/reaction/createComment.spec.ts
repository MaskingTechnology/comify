
import { beforeEach, describe, expect, it } from 'vitest';

import { RECORD_TYPE as POST_RECORD_TYPE } from '^/domain/post';
import { RECORD_TYPE as REACTION_RECORD_TYPE } from '^/domain/reaction';
import create from '^/domain/reaction/createWithComment';

import database from '^/integrations/database/module';

import { DATABASES, FILE_STORES, REQUESTERS, VALUES } from './fixtures';

beforeEach(async () =>
{
    await Promise.all([
        DATABASES.withEverything(),
        FILE_STORES.withImage()
    ]);
});

describe('domain/reaction/createComment', () =>
{
    it('should create a comment reaction', async () =>
    {
        const reactionId = await create(REQUESTERS.OWNER, VALUES.IDS.POST_EXISTING, VALUES.MESSAGES.VALID_COMMENT);

        const reaction = await database.readRecord(REACTION_RECORD_TYPE, reactionId);
        expect(reaction?.creatorId).toBe(REQUESTERS.OWNER.id);
        expect(reaction?.postId).toBe(VALUES.IDS.POST_EXISTING);
        expect(reaction?.comicId).toBeUndefined();
        expect(reaction?.ratingCount).toBe(0);
        expect(reaction?.createdAt).toBeDefined();

        const post = await database.readRecord(POST_RECORD_TYPE, reaction.postId as string);
        expect(post?.creatorId).toBe(REQUESTERS.OWNER.id);
        expect(post?.comicId).toBeDefined();
        expect(post?.createdAt).toBeDefined();
        expect(post?.ratingCount).toBe(0);
        expect(post?.reactionCount).toBe(1);
    });
});
