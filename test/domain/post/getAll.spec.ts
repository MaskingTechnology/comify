
import { beforeEach, describe, expect, it } from 'vitest';

import getAll from '^/domain/post/getAll/feature';


import { DATABASES, REQUESTERS } from './fixtures';

beforeEach(async () =>
{
    await DATABASES.withCreatorsAndRelations();
});

describe('domain/post/getall', () =>
{
    it('should give all posts for the timeline of requester1', async () =>
    {
        const result = await getAll(REQUESTERS.CREATOR1);

        expect(result.length).toBe(2);
    });

    it('should give all posts for the timeline of requester2', async () =>
    {
        const result = await getAll(REQUESTERS.CREATOR2);

        expect(result.length).toBe(3);
    });

    it('should give all posts for the timeline of requester3', async () =>
    {
        const result = await getAll(REQUESTERS.CREATOR3);

        expect(result.length).toBe(3);
    });

    it('should give all posts for the timeline of requester4', async () =>
    {
        const result = await getAll(REQUESTERS.CREATOR4);

        expect(result.length).toBe(4);
    });
});

