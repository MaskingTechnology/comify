
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { requester } from '@comify/common/security';
import { type Reason } from '@comify/moderation/domain/report';
import create from '@comify/moderation/domain/report/create';

export default function useReportPost(id?: string)
{
    const navigate = useNavigate();

    return useCallback(async (reason: string, remark: string) =>
    {
        if (id === undefined) return;

        await create(requester, {
            postId: id,
            reason: reason as Reason,
            remark: remark === '' ? undefined : remark
        });

        navigate(-1);

    }, [id, navigate]);
}
