
import { beforeEach, describe, expect, it } from 'vitest';

import getAllAggregated from '^/domain/post/getRecommendedAggregated';
import { DATA_URLS, DATABASES, FILE_STORES, REQUESTERS } from './fixtures';

beforeEach(async () =>
{
    await Promise.all([
        DATABASES.withCreatorsPostsAndRelations(),
        FILE_STORES.withImage()
    ]);
});

describe('domain/post/getallAggregated', () =>
{
    it('should give all posts except those created by the requester', async () =>
    {
        const result = await getAllAggregated(REQUESTERS.CREATOR1, { offset: 0, limit: 7 });

        expect(result).toHaveLength(1);
        expect(result[0].creator.following.id).toBe(REQUESTERS.CREATOR2.id);
        expect(result[0].comic?.image.dataUrl).toBe(DATA_URLS.COMIC_IMAGE);
    });
});
