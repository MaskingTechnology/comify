
import { beforeEach, describe, expect, it } from 'vitest';

import { RECORD_TYPE as POST_RECORD_TYPE } from '^/domain/post/definitions';
import PostNotFound from '^/domain/post/PostNotFound';
import remove from '^/domain/post/remove/feature';

import database from '^/integrations/database/module';

import { DATABASES, REQUESTERS, VALUES } from './fixtures';

beforeEach(async () =>
{
    await DATABASES.withPostsAndCreators();
});

describe('domain/post/remove', () =>
{
    it('should soft delete a post', async () =>
    {
        await remove(REQUESTERS.CREATOR, VALUES.IDS.POST_RATED);

        const reaction = await database.readRecord(POST_RECORD_TYPE, VALUES.IDS.POST_RATED);
        expect(reaction.deleted).toBeTruthy();
    });

    it('should not delete an already deleted post', async () =>
    {
        const promise = remove(REQUESTERS.CREATOR, VALUES.IDS.POST_DELETED);
        await expect(promise).rejects.toThrow(PostNotFound);
    });

    it('should not delete a post from another creator', async () =>
    {
        const promise = remove(REQUESTERS.VIEWER, VALUES.IDS.POST_RATED);
        await expect(promise).rejects.toThrow(PostNotFound);
    });
});
