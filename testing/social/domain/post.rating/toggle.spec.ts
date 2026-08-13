
import { beforeAll, afterAll, beforeEach, describe, expect, it } from 'vitest';

import database from '@comify/common/integrations/database';
import eventBroker from '@comify/common/integrations/eventBroker';

import toggle from '@comify/social/domain/post.rating/toggle';

import { REQUESTERS, POST_RECORDS, seedPosts, seedRatings } from '../../fixtures';

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
    await Promise.all([
        seedPosts(),
        seedRatings()
    ]);
});

describe('index', () =>
{
    it('should add a rating', async () =>
    {
        const result = await toggle(REQUESTERS.BOB, POST_RECORDS.SECOND.id);

        expect(result).toBeTruthy();
    });

    it('should remove a rating', async () =>
    {
        const result = await toggle(REQUESTERS.BOB, POST_RECORDS.FIRST.id);

        expect(result).toBeFalsy();
    });
});
