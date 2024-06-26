
import { describe, expect, it } from 'vitest';

import create from '^/domain/comment/create/feature';
import InvalidComment from '^/domain/comment/create/InvalidComment';
import { RECORD_TYPE } from '^/domain/comment/definitions';

import database from '^/integrations/database/module';

import { VALUES } from './fixtures';

describe('domain/comment/create', () =>
{
    it('should create a comment reaction', async () =>
    {
        const reactionId = await create(VALUES.MESSAGES.VALID_COMMENT);

        const comment = await database.readRecord(RECORD_TYPE, reactionId);
        expect(comment?.message).toBe(VALUES.MESSAGES.VALID_COMMENT);
    });

    it('should fail when message is invalid', async () =>
    {
        const promise = create(VALUES.MESSAGES.INVALID_COMMENT);
        await expect(promise).rejects.toThrow(InvalidComment);
    });
});
