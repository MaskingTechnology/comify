
import getByFollowingAggregated from '^/domain/post/getByFollowingAggregated/feature';
import { beforeEach, describe, expect, it } from 'vitest';
import { DATABASES, FILE_STORES, REQUESTERS } from './fixtures';

beforeEach(async () =>
{
    await Promise.all([

        DATABASES.withCreatorsPostsAndRelations(),
        FILE_STORES.withImage()
    ]
    );
});

describe('domain/post/getbyfollowingaggregated', () =>
{
    it('should give all posts for the timeline of all followers of requester1', async () =>
    {
        const result = await getByFollowingAggregated(REQUESTERS.CREATOR1, { offset: 0, limit: 7 });

        expect(result).toHaveLength(1);
        expect(result[0].creator.following.id).toBe(REQUESTERS.CREATOR2.id);
    });
});

