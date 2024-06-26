
import { beforeEach, describe, expect, it } from 'vitest';

import getByFollowing from '^/domain/post/getByFollowing/feature';


import { DATABASES, REQUESTERS } from './fixtures';

beforeEach(async () =>
{
    await DATABASES.withCreatorsAndRelations();
});

describe('domain/post/getbyfollowing', () =>
{
    it('should give all posts for the timeline of all followers of requester1', async () =>
    {
        const result = await getByFollowing(REQUESTERS.CREATOR1);

        expect(result.length).toBe(1);
    });

    it('should give all posts for the timeline of all followers of requester2', async () =>
    {
        const result = await getByFollowing(REQUESTERS.CREATOR2);

        expect(result.length).toBe(3);
    });

    it('should give all posts for the timeline of all followers of requester3', async () =>
    {
        const result = await getByFollowing(REQUESTERS.CREATOR3);

        expect(result.length).toBe(2);
    });

    it('should give all posts for the timeline of all followers of requester4', async () =>
    {
        const result = await getByFollowing(REQUESTERS.CREATOR4);

        expect(result.length).toBe(0);
    });
});

