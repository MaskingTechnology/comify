
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import type { AggregatedData as AggregatedReactionData } from '^/domain/reaction/aggregate';

export default function useViewReactionDetails()
{
    const navigate = useNavigate();

    return useCallback((reaction: AggregatedReactionData) =>
    {
        navigate(`/post/${reaction.postId}/reaction/${reaction.id}`);

    }, [navigate]);
}
