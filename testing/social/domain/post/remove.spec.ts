
import { beforeAll, afterAll, beforeEach, describe, expect, it } from 'vitest';

import database from '@comify/common/integrations/database';
import eventBroker from '@comify/common/integrations/eventBroker';

import { PostNotFound, RECORD_TYPE, type Record } from '@comify/social/domain/post';
import remove from '@comify/social/domain/post/remove';

import { DATABASES, REQUESTERS, TENANTS, VALUES } from './fixtures';

beforeAll(async () =>
{
    await Promise.all([
        database.connect(),
        eventBroker.connect()
    ]);
});

afterAll(async () =>
{
    await Promise.all([
        database.disconnect(),
        eventBroker.disconnect()
    ]);
});

beforeEach(async () =>
{
    await DATABASES.withPostsAndCreators();
});

describe('domain/post/remove', () =>
{
    it('should soft delete a post', async () =>
    {
        await remove(REQUESTERS.CREATOR1, VALUES.IDS.POST_RATED);

        const result = await database.readRecord<Record>(RECORD_TYPE, { id: { EQUALS: VALUES.IDS.POST_RATED } });

        expect(result?.deleted).toBeTruthy();
    });

    it('should not delete an already deleted post', async () =>
    {
        const promise = remove(REQUESTERS.CREATOR1, VALUES.IDS.POST_DELETED);

        await expect(promise).rejects.toThrow(PostNotFound);
    });

    it('should not delete a post from another creator', async () =>
    {
        await remove(REQUESTERS.VIEWER, VALUES.IDS.POST_RATED);

        const result = await database.readRecord<Record>(RECORD_TYPE, { id: { EQUALS: VALUES.IDS.POST_RATED } });

        expect(result?.deleted).toBeFalsy();
    });
});
