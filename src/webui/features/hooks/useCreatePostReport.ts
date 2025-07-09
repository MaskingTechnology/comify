
import { useCallback } from 'react';

import type { AggregatedData as AggregatedPostData } from '^/domain/post/aggregate';
import createReport from '^/domain/report/create';
import type { Reason } from '^/domain/report/types';

export default function useCreatePostReport(post: AggregatedPostData, selected: string, handleDone: (reportId: string) => void)
{
    return useCallback(async (remark?: string) =>
    {
        let reason: Reason;

        if (selected === 'content')
        {
            reason = 'inappropriate content';
        }
        else 
        {
            reason = 'scam, fraude or spam';
        }

        const reportId = await createReport(post.id, reason, remark);

        handleDone(reportId);

    }, [post, handleDone]);
}
