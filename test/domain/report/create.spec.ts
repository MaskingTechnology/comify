
import { describe, expect, it } from 'vitest';

import { RECORD_TYPE } from '^/domain/report';
import create, { InvalidReport } from '^/domain/report/create';

import database from '^/integrations/database';

import { VALUES } from './fixtures';

describe('domain/report/create', () =>
{
    it('should create a report without a remark', async () =>
    {
        const reportId = await create(VALUES.IDS.postId, 'scam, fraude or spam');

        const report = await database.readRecord(RECORD_TYPE, reportId);
        expect(report.postId).toBe(VALUES.IDS.postId);
        expect(report.remark).toBe(undefined);
    });

    it('should create a report with a valid remark', async () =>
    {
        const reportId = await create(VALUES.IDS.postId, 'scam, fraude or spam', VALUES.REMARKS.VALID_REMARK);

        const report = await database.readRecord(RECORD_TYPE, reportId);
        expect(report.postId).toBe(VALUES.IDS.postId);
        expect(report?.remark).toBe(VALUES.REMARKS.VALID_REMARK);
    });

    it('should fail when message is invalid', async () =>
    {
        const promise = create(VALUES.IDS.postId, 'scam, fraude or spam', VALUES.REMARKS.INVALID_REMARK);
        await expect(promise).rejects.toThrow(InvalidReport);
    });
});
