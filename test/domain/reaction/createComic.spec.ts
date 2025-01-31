
import { beforeEach, describe, expect, it } from 'vitest';

import { RECORD_TYPE as POST_RECORD_TYPE } from '^/domain/post';
import { RECORD_TYPE as REACTION_RECORD_TYPE } from '^/domain/reaction';
import create from '^/domain/reaction/createWithComic';

import database from '^/integrations/database';

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
    it('should create a comic reaction on a post', async () =>
    {
        const reactionId = await create(REQUESTERS.OWNER, VALUES.COMIC_DATA_URL, VALUES.IDS.POST_EXISTING);

        const reaction = await database.readRecord(REACTION_RECORD_TYPE, reactionId);
        expect(reaction?.creatorId).toBe(REQUESTERS.OWNER.id);
        expect(reaction?.postId).toBe(VALUES.IDS.POST_EXISTING);
        expect(reaction?.reactionId).toBeUndefined();
        expect(reaction?.commentId).toBeUndefined();
        expect(reaction?.ratingCount).toBe(0);
        expect(reaction?.createdAt).toBeDefined();

        const post = await database.readRecord(POST_RECORD_TYPE, reaction.postId as string);
        expect(post?.creatorId).toBe(REQUESTERS.OWNER.id);
        expect(post?.comicId).toBeDefined();
        expect(post?.createdAt).toBeDefined();
        expect(post?.ratingCount).toBe(0);
    });

    it('should create a comic reaction on a reaction', async () =>
    {
        const reactionId = await create(REQUESTERS.OWNER, VALUES.COMIC_DATA_URL, undefined, VALUES.IDS.REACTION_COMIC);

        const reaction = await database.readRecord(REACTION_RECORD_TYPE, reactionId);
        expect(reaction?.creatorId).toBe(REQUESTERS.OWNER.id);
        expect(reaction?.postId).toBeUndefined();
        expect(reaction?.reactionId).toBe(VALUES.IDS.REACTION_COMIC);
        expect(reaction?.commentId).toBeUndefined();
        expect(reaction?.ratingCount).toBe(0);
        expect(reaction?.createdAt).toBeDefined();

        const reaction1 = await database.readRecord(REACTION_RECORD_TYPE, reaction.reactionId as string);
        expect(reaction1?.creatorId).toBe(REQUESTERS.OWNER.id);
        expect(reaction1?.comicId).toBeDefined();
        expect(reaction1?.createdAt).toBeDefined();
        expect(reaction1?.ratingCount).toBe(0);
    });
});
