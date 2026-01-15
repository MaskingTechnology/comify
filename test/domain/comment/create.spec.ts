
import { beforeAll, afterAll, beforeEach, describe, expect, it } from 'vitest';

import database from '^/integrations/database';

import { RECORD_TYPE } from '^/domain/comment';
import create, { InvalidComment } from '^/domain/comment/create';

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

describe('domain/comment/create', () =>
{
    it('should create a comment', async () =>
    {
        const reactionId = await create(VALUES.MESSAGES.VALID_COMMENT);

        const comment = await database.readRecord(RECORD_TYPE, { id: { EQUALS: reactionId } });

        expect(comment?.message).toBe(VALUES.MESSAGES.VALID_COMMENT);
    });

    it('should fail when message is invalid', async () =>
    {
        const promise = create(VALUES.MESSAGES.INVALID_COMMENT);
        
        await expect(promise).rejects.toThrow(InvalidComment);
    });
});
