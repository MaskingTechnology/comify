
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import type { AggregatedData as ReactionView } from '^/domain/reaction/aggregate/types';

export default function useGoBack()
{
    const navigate = useNavigate();

    return useCallback((reaction: ReactionView) =>
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
