
import { beforeEach, describe, expect, it } from 'vitest';

import { RECORD_TYPE as REACTION_RECORD_TYPE } from '^/domain/reaction/definitions/constants';
import ReactionNotFound from '^/domain/reaction/errors/ReactionNotFound';
import remove from '^/domain/reaction/remove';

import database from '^/integrations/database/module';

import { DATABASES, REQUESTERS, VALUES } from './fixtures';

beforeEach(async () =>
{
    await DATABASES.withEverything();
});

describe('domain/reaction/remove', () =>
{
    it('should soft delete a reaction with a comment', async () =>
    {
        await remove(REQUESTERS.OWNER, VALUES.IDS.REACTION_COMMENT);

        const reaction = await database.readRecord(REACTION_RECORD_TYPE, VALUES.IDS.REACTION_COMMENT);
        expect(reaction.deleted).toBeTruthy();
    });

    it('should soft delete a reaction with a comic', async () =>
    {
        await remove(REQUESTERS.OWNER, VALUES.IDS.REACTION_COMIC);

        const record = await database.readRecord(REACTION_RECORD_TYPE, VALUES.IDS.REACTION_COMIC);
        expect(record.deleted).toBeTruthy();
    });

    it('should not delete an already deleted reaction', async () =>
    {
        const promise = remove(REQUESTERS.OWNER, VALUES.IDS.REACTION_DELETED);
        await expect(promise).rejects.toThrow(ReactionNotFound);
    });

    it('should not delete a reaction from another creator', async () =>
    {
        const promise = remove(REQUESTERS.VIEWER, VALUES.IDS.REACTION_COMMENT);
        await expect(promise).rejects.toThrow(ReactionNotFound);
    });
});
