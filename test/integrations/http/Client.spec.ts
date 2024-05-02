
import { describe, expect, it } from 'vitest';
import { RESPONSES, URLS, httpClient } from './_fixtures/Client.fixture';

describe('Client', () =>
{
    describe('.get', () =>
    {
        it('should give a cached result', async () =>
        {
            const result = await httpClient.get(URLS.CACHED);

            expect(result).toEqual(RESPONSES.CACHED);
        });

        it('should give a non-cached result from its implementation', async () =>
        {
            const result = await httpClient.get(URLS.NOT_CACHED);

            expect(result).toEqual(RESPONSES.NOT_CACHED);
        });
    });
});
