
import { beforeAll, afterAll, describe, expect, it } from 'vitest';

import database from '@comify/common/integrations/database';
import fileStore from '@comify/common/integrations/files';

import create from '@comify/social/domain/post.comic/create';
import { RECORD_TYPE, type Record } from '@comify/social/domain/post.comic/definitions';

import { IMAGE_DATA_URLS } from '../../fixtures';

beforeAll(async () =>
{
    await Promise.all([
        database.connect(),
        fileStore.connect()
    ]);
});

afterAll(async () =>
{
    await Promise.all([
        database.disconnect(),
        fileStore.disconnect()
    ]);
});

describe('index', () =>
{
    it('should create a comic', async () =>
    {
        const comicId = await create({ imageDataUrl: IMAGE_DATA_URLS.COMIC });

        const record = await database.readRecord<Record>(RECORD_TYPE, { id: { EQUALS: comicId } });

        expect(record).toBeDefined();
        expect(record?.imageId).toBeDefined();
    });
});
