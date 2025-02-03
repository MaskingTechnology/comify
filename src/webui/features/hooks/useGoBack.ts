
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import type { AggregatedData as AggregatedReactionData } from '^/domain/post/aggregate';

export default function useGoBack()
{
    const navigate = useNavigate();

    return useCallback((reaction: AggregatedReactionData) =>
    {
        if (reaction.parentId === undefined)
        {
            return navigate('/');
        }

        return navigate(`/post/${reaction.parentId}`);

    }, [navigate]);
}
