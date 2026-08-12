
import { beforeAll, afterAll, beforeEach, describe, expect, it } from 'vitest';

import database from '@comify/common/integrations/database';

import { RECORD_TYPE, type Record } from '@comify/social/domain/post.comment';
import create, { InvalidComment } from '@comify/social/domain/post.comment/create';

import { DATABASES, VALUES } from './fixtures';

beforeAll(async () =>
{
    await database.connect();
});

afterAll(async () =>
{
    await database.disconnect();
});

beforeEach(async () =>
{
    await DATABASES.empty();
});

describe('domain/post.comment/create', () =>
{
    it('should create a comment', async () =>
    {
        const reactionId = await create({ message: VALUES.MESSAGES.VALID_COMMENT });

        const result = await database.readRecord<Record>(RECORD_TYPE, { id: { EQUALS: reactionId } });

        expect(result?.message).toBe(VALUES.MESSAGES.VALID_COMMENT);
    });

    it('should fail when message is invalid', async () =>
    {
        const promise = create({ message: VALUES.MESSAGES.INVALID_COMMENT });

        await expect(promise).rejects.toThrow(InvalidComment);
    });
});
