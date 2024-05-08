
import { beforeEach, describe, expect, it } from 'vitest';

import { HTTP_CLIENTS, RESPONSES, URLS, httpClient } from './fixtures';

beforeEach(() =>
{
    HTTP_CLIENTS.withCache();
});

describe('Client', () =>
{
    describe('.get', () =>
    {
        it('should get a cached result', async () =>
        {
            const result = await httpClient.get(URLS.CACHED);

            expect(result).toEqual(RESPONSES.CACHED);
        });

        it('should get a non-cached result from its implementation', async () =>
        {
            const result = await httpClient.get(URLS.NOT_CACHED);

            expect(result).toEqual(RESPONSES.NOT_CACHED);
        });
    });

    describe('.post', () =>
    {
        it('should post a cached result', async () =>
        {
            const result = await httpClient.post(URLS.CACHED, null);

            expect(result).toEqual(RESPONSES.CACHED);
        });

        it('should post a non-cached result from its implementation', async () =>
        {
            const result = await httpClient.post(URLS.NOT_CACHED, null);

            expect(result).toEqual(RESPONSES.NOT_CACHED);
        });
    });

    describe('.put', () =>
    {
        it('should put a cached result', async () =>
        {
            const result = await httpClient.put(URLS.CACHED, null);

            expect(result).toEqual(RESPONSES.CACHED);
        });

        it('should put a non-cached result from its implementation', async () =>
        {
            const result = await httpClient.put(URLS.NOT_CACHED, null);

            expect(result).toEqual(RESPONSES.NOT_CACHED);
        });
    });

    describe('.patch', () =>
    {
        it('should patch a cached result', async () =>
        {
            const result = await httpClient.patch(URLS.CACHED, null);

            expect(result).toEqual(RESPONSES.CACHED);
        });

        it('should patch a non-cached result from its implementation', async () =>
        {
            const result = await httpClient.patch(URLS.NOT_CACHED, null);

            expect(result).toEqual(RESPONSES.NOT_CACHED);
        });
    });

    describe('.delete', () =>
    {
        it('should delete a cached result', async () =>
        {
            const result = await httpClient.delete(URLS.CACHED);

            expect(result).toEqual(RESPONSES.CACHED);
        });

        it('should delete a non-cached result from its implementation', async () =>
        {
            const result = await httpClient.delete(URLS.NOT_CACHED);

            expect(result).toEqual(RESPONSES.NOT_CACHED);
        });
    });

    describe('.head', () =>
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
