
import { beforeAll, afterAll, beforeEach, describe, expect, it } from 'vitest';

import database from '@comify/common/integrations/database';
import eventBroker from '@comify/common/integrations/events';

import { PostNotFound, RECORD_TYPE, type Record } from '@comify/social/domain/post';
import remove from '@comify/social/domain/post/remove';

import { REQUESTERS, POST_RECORDS, seedPosts } from '../../fixtures';

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
    await seedPosts();
});

describe('index', () =>
{
    it('should soft delete a post', async () =>
    {
        await remove(REQUESTERS.ALICE, POST_RECORDS.SECOND.id);

        const record = await database.readRecord<Record>(RECORD_TYPE, { id: { EQUALS: POST_RECORDS.SECOND.id } });

        expect(record?.deleted).toBeTruthy();
    });

    it('should not delete an already deleted post', async () =>
    {
        const promise = remove(REQUESTERS.HENRY, POST_RECORDS.DELETED.id);

        await expect(promise).rejects.toThrow(PostNotFound);
    });

    it('should not delete a post from another creator', async () =>
    {
        await remove(REQUESTERS.BOB, POST_RECORDS.FIRST.id);

        const record = await database.readRecord<Record>(RECORD_TYPE, { id: { EQUALS: POST_RECORDS.FIRST.id } });

        expect(record?.deleted).toBeFalsy();
    });
});
