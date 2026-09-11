
import { beforeAll, afterAll, beforeEach, describe, expect, it } from 'vitest';

import database from '@comify/common/integrations/database';
import eventBroker from '@comify/common/integrations/events';
import fileStore from '@comify/common/integrations/files';

import { RECORD_TYPE, type Record } from '@comify/social/domain/creator';
import create, { TooManySimilarNicknames, type CreateData } from '@comify/social/domain/creator/create';

import { TENANTS, CREATOR_RECORDS, IMAGE_URLS, seedCreators, seedImages } from '../../fixtures';

beforeAll(async () =>
{
    await Promise.all([
        database.connect(),
        eventBroker.connect(),
        fileStore.connect()
    ]);
});

afterAll(async () =>
{
    await Promise.all([
        database.disconnect(),
        eventBroker.disconnect(),
        fileStore.disconnect()
    ]);
});

beforeEach(async () =>
{
    await Promise.all([
        seedCreators(),
        seedImages()
    ]);
});

describe('index', () =>
{
    it('should create with a duplicate nickname', async () =>
    {
        const nickname = CREATOR_RECORDS.EVE.nickname;

        const firstData: CreateData = { nickname, fullName: 'First Creator', email: 'first@example.com' };
        const secondData: CreateData = { nickname, fullName: 'Second Creator', email: 'second@example.com' };

        const firstId = await create(TENANTS.EFGH, firstData);
        const secondId = await create(TENANTS.EFGH, secondData);

        const firstRecord = await database.readRecord<Record>(RECORD_TYPE, { id: { EQUALS: firstId } });
        const secondRecord = await database.readRecord<Record>(RECORD_TYPE, { id: { EQUALS: secondId } });

        expect(firstRecord).toBeDefined();
        expect(firstRecord?.nickname).toBe(nickname + '_001');

        expect(secondRecord).toBeDefined();
        expect(secondRecord?.nickname).toBe(nickname + '_002');
    });

    it('should NOT register with too many occurrences nickname', async () =>
    {
        const nickname = CREATOR_RECORDS.FELIX.nickname;

        const data: CreateData = { nickname, fullName: 'New Creator', email: 'new@example.com' };

        const promise = create(TENANTS.EFGH, data);

        await expect(promise).rejects.toStrictEqual(new TooManySimilarNicknames());
    });

    it('should create with spaces in nickname', async () =>
    {
        const data: CreateData = { nickname: 'new creator', fullName: 'New Creator', email: 'new@example.com' };

        const id = await create(TENANTS.EFGH, data);

        const record = await database.readRecord<Record>(RECORD_TYPE, { id: { EQUALS: id } });

        expect(record).toBeDefined();
        expect(record?.nickname).toBe('newcreator');
    });

    it('should create with underscores in nickname', async () =>
    {
        const data: CreateData = { nickname: 'new_creator', fullName: 'New Creator', email: 'new@example.com' };

        const id = await create(TENANTS.EFGH, data);

        const record = await database.readRecord<Record>(RECORD_TYPE, { id: { EQUALS: id } });

        expect(record).toBeDefined();
        expect(record?.nickname).toBe('newcreator');
    });

    it('should create with a valid profile picture', async () =>
    {
        const portraitUrl = IMAGE_URLS.PROFILE;

        const data: CreateData = { nickname: 'newcreator', fullName: 'New Creator', email: 'new@example.com', portraitUrl };

        const id = await create(TENANTS.EFGH, data);

        const record = await database.readRecord<Record>(RECORD_TYPE, { id: { EQUALS: id } });

        expect(record).toBeDefined();
        expect(record?.nickname).toBe('newcreator');
    });
});
