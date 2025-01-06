
import { beforeEach, describe, expect, it } from 'vitest';

import { Types } from '^/domain/notification/definitions';
import getRecentAggregated from '^/domain/notification/getRecentAggregated/feature';
import { DATABASES, FILE_STORES, REQUESTERS, VALUES } from './fixtures';

beforeEach(async () =>
{
    await Promise.all([
        DATABASES.withCreatorsPostsAndNotifications(),
        FILE_STORES.withImage()
    ]);
});

describe('domain/notification/getallAggregated', () =>
{
    it('should give all notifications under normal circumstances', async () =>
    {
        const result = await getRecentAggregated(REQUESTERS.CREATOR2, { offset: 0, limit: 7 });

        expect(result).toHaveLength(2);

        const notification1 = result[0];
        const notification2 = result[1];

        expect(notification1.type).toBe(Types.STARTED_FOLLOWING);
        expect(notification1.targetPost).toBe(undefined);
        expect(notification1.targetReaction).toBe(undefined);
        expect(notification1.relation.following.id).toBe(VALUES.IDS.CREATOR1);

        expect(notification2.type).toBe(Types.RATED_POST);
        expect(notification2.targetPost?.id).toBe(VALUES.IDS.POST_RATED);
        expect(notification2.targetReaction).toBe(undefined);
        expect(notification2.relation.following.id).toBe(VALUES.IDS.CREATOR3);

    });

    it('should give only the notifications that aggregate without errors', async () =>
    {
        const result = await getRecentAggregated(REQUESTERS.CREATOR1, { offset: 0, limit: 7 });

        expect(result).toHaveLength(2);

        const notification1 = result[0];
        const notification2 = result[1];

        expect(notification1.type).toBe(Types.STARTED_FOLLOWING);
        expect(notification1.targetPost).toBe(undefined);
        expect(notification1.targetReaction).toBe(undefined);
        expect(notification1.relation.following.id).toBe(VALUES.IDS.CREATOR2);

        expect(notification2.type).toBe(Types.RATED_REACTION);
        expect(notification2.targetPost).toBe(undefined);
        expect(notification2.targetReaction?.id).toBe(VALUES.IDS.REACTION_LIKED);
        expect(notification2.relation.following.id).toBe(VALUES.IDS.CREATOR2);

    });
});
