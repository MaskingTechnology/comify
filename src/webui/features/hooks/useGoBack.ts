
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import type { AggregatedData as AggregatedReactionData } from '^/domain/reaction/aggregate';

export default function useGoBack()
{
    const navigate = useNavigate();

    return useCallback((reaction: AggregatedReactionData) =>
    {
        if (reaction.postId !== undefined)
        {
            navigate(`/post/${reaction.postId}`);
        }
        else
        {
            navigate(`/reaction/${reaction.reactionId}`);
        }


    }, [navigate]);
}
