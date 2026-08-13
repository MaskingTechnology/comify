
import { beforeAll, afterAll, describe, expect, it } from 'vitest';

import database from '@comify/common/integrations/database';

import { RECORD_TYPE, type Record } from '@comify/social/domain/post.comment';
import { MESSAGE_MAX_LENGTH } from '@comify/social/domain/post.comment/definitions';
import create, { InvalidComment } from '@comify/social/domain/post.comment/create';

beforeAll(async () =>
{
    await database.connect();
});

afterAll(async () =>
{
    await database.disconnect();
});

describe('index', () =>
{
    it('should create a comment', async () =>
    {
        const message = 'New comment';

        const reactionId = await create({ message });

        const record = await database.readRecord<Record>(RECORD_TYPE, { id: { EQUALS: reactionId } });

        expect(record).toBeDefined();
        expect(record?.message).toEqual(message);
    });

    it('should fail when message is invalid', async () =>
    {
        const message = 'A'.repeat(MESSAGE_MAX_LENGTH + 1);

        const promise = create({ message });

        await expect(promise).rejects.toThrow(InvalidComment);
    });
});
