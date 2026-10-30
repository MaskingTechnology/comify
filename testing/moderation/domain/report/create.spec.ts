
import { beforeAll, afterAll, describe, expect, it } from 'vitest';

import database from '@comify/common/integrations/database';
import generateId from '@comify/common/primitives/identifier/generate';
import { type Requester } from '@comify/common/security';
import { RECORD_TYPE, Reasons, REMARK_MAX_LENGTH, type Reason, type Record } from '@comify/moderation/domain/report';
import create, { InvalidReport } from '@comify/moderation/domain/report/create';

const REQUESTER: Requester = { principalId: generateId(), tenantId: 'tenant' };

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
    it('should create a report', async () =>
    {
        const postId = generateId();

        const reportId = await create(REQUESTER, { postId, reason: Reasons.INAPPROPRIATE_CONTENT, remark: 'This is spam' });

        const result = await database.readRecord<Record>(RECORD_TYPE, { id: { EQUALS: reportId } });

        expect(result.record).toBeDefined();
        expect(result.record?.postId).toEqual(postId);
        expect(result.record?.reporterId).toEqual(REQUESTER.principalId);
        expect(result.record?.tenantId).toEqual(REQUESTER.tenantId);
        expect(result.record?.reason).toEqual(Reasons.INAPPROPRIATE_CONTENT);
        expect(result.record?.remark).toEqual('This is spam');
        expect(result.record?.reviewed).toEqual(false);
    });

    it('should create a report without a remark', async () =>
    {
        const postId = generateId();

        const reportId = await create(REQUESTER, { postId, reason: Reasons.SCAM_FRAUD_OR_SPAM });

        const result = await database.readRecord<Record>(RECORD_TYPE, { id: { EQUALS: reportId } });

        expect(result.record).toBeDefined();
        expect(result.record?.remark).toBeUndefined();
    });

    it('should fail when the post id is invalid', async () =>
    {
        const promise = create(REQUESTER, { postId: 'invalid', reason: Reasons.INAPPROPRIATE_CONTENT });

        await expect(promise).rejects.toThrow(InvalidReport);
    });

    it('should fail when the reason is invalid', async () =>
    {
        const postId = generateId();

        const promise = create(REQUESTER, { postId, reason: 'unknown' as Reason });

        await expect(promise).rejects.toThrow(InvalidReport);
    });

    it('should fail when the remark is too long', async () =>
    {
        const postId = generateId();
        const remark = 'A'.repeat(REMARK_MAX_LENGTH + 1);

        const promise = create(REQUESTER, { postId, reason: Reasons.INAPPROPRIATE_CONTENT, remark });

        await expect(promise).rejects.toThrow(InvalidReport);
    });
});
