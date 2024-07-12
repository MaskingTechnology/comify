
import { beforeEach, describe, expect, it } from 'vitest';

import { RECORD_TYPE as POST_RECORD_TYPE } from '^/domain/post/definitions';
import create from '^/domain/reaction/createComic/feature';
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

describe('domain/reaction/createComic', () =>
{
    it('should create a comic reaction', async () =>
    {
        const reactionId = await create(REQUESTERS.OWNER, VALUES.IDS.POST_EXISTING, VALUES.COMIC_DATA_URL);

        const reaction = await database.readRecord(REACTION_RECORD_TYPE, reactionId);
        expect(reaction?.creatorId).toBe(REQUESTERS.OWNER.id);
        expect(reaction?.postId).toBe(VALUES.IDS.POST_EXISTING);
        expect(reaction?.commentId).toBeUndefined();
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
