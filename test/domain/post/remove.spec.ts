
import { beforeEach, describe, expect, it } from 'vitest';

import { PostNotFound, RECORD_TYPE } from '^/domain/post';
import remove from '^/domain/post/remove';

import database from '^/integrations/database';

import { DATABASES, REQUESTERS, TENANTS, VALUES } from './fixtures';

beforeEach(async () =>
{
    await DATABASES.withPostsAndCreators();
});

describe('domain/post/remove', () =>
{
    it('should soft delete a post', async () =>
    {
        await remove(TENANTS.default, REQUESTERS.CREATOR1, VALUES.IDS.POST_RATED);

        const reaction = await database.readRecord(RECORD_TYPE, VALUES.IDS.POST_RATED);
        expect(reaction.deleted).toBeTruthy();
    });

    it('should not delete an already deleted post', async () =>
    {
        const promise = remove(TENANTS.default, REQUESTERS.CREATOR1, VALUES.IDS.POST_DELETED);
        await expect(promise).rejects.toThrow(PostNotFound);
    });

    it('should not delete a post from another creator', async () =>
    {
        const promise = remove(TENANTS.default, REQUESTERS.VIEWER, VALUES.IDS.POST_RATED);
        await expect(promise).rejects.toThrow(PostNotFound);
    });
});
