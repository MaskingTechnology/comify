
import { beforeEach, describe, expect, it } from 'vitest';

import getByReaction from '^/domain/reaction/getByReactionAggregated';

import { DATABASES, FILE_STORES, REQUESTERS, VALUES } from './fixtures';

beforeEach(async () =>
{
    await Promise.all([
        DATABASES.withEverything(),
        FILE_STORES.withImage()
    ]);
});

describe('domain/reaction/getByReactionAggregated', () =>
{
    it('should give the aggregated reaction reaction data', async () =>
    {
        const reactions = await getByReaction(REQUESTERS.OWNER, VALUES.IDS.REACTION_EXISTING, VALUES.RANGE);
        expect(reactions.length).toBe(4);
        expect(reactions[0].id).toBe(VALUES.IDS.REACTION_COMIC);
        expect(reactions[0].comic?.id).toBe(VALUES.IDS.COMIC);
        expect(reactions[0].comment).toBeUndefined();
    });

    it('should not retrieve deleted reactions', async () =>
    {
        const reactions = await getByReaction(REQUESTERS.OWNER, VALUES.IDS.REACTION_EXISTING, VALUES.RANGE);
        expect(reactions).not.toContainEqual({ id: VALUES.IDS.REACTION_DELETED });
    });
});
