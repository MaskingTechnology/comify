
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { publish as publishReportAdded } from '@comify/common/domain/report/added';
import { requester } from '@comify/common/security';

import { CONTEXT_ID } from '^/domain/definitions';

export default function useReportPost(id?: string)
{
    const navigate = useNavigate();

    return useCallback(async (reason: string, remark: string) =>
    {
        if (id === undefined) return;

        await publishReportAdded({
            contextId: CONTEXT_ID,
            principalId: requester.principalId,
            tenantId: requester.tenantId,
            postId: id,
            reason,
            remark: remark === '' ? undefined : remark
        });

        navigate(-1);

    }, [id, navigate]);
}
