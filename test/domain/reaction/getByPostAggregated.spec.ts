
import { beforeEach, describe, expect, it } from 'vitest';

import getByPost from '^/domain/reaction/getByPostAggregated';

import { DATABASES, FILE_STORES, REQUESTERS, VALUES } from './fixtures';

beforeEach(async () =>
{
    await Promise.all([
        DATABASES.withEverything(),
        FILE_STORES.withImage()
    ]);
});

describe('domain/reaction/getByPostAggregated', () =>
{
    it('should give the aggregated post reaction data', async () =>
    {
        const reactions = await getByPost(REQUESTERS.OWNER, VALUES.IDS.POST_EXISTING, VALUES.RANGE);
        expect(reactions.length).toBe(4);
        expect(reactions[0].id).toBe(VALUES.IDS.REACTION_COMIC);
        expect(reactions[0].comic?.id).toBe(VALUES.IDS.COMIC);
        expect(reactions[0].comment).toBeUndefined();
    });

    it('should not retrieve deleted reactions', async () =>
    {
        const reactions = await getByPost(REQUESTERS.OWNER, VALUES.IDS.POST_EXISTING, VALUES.RANGE);
        expect(reactions).not.toContainEqual({ id: VALUES.IDS.REACTION_DELETED });
    });
});
