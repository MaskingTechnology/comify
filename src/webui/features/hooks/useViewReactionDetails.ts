
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import type { AggregatedData as ReactionView } from '^/domain/reaction/aggregate/types';

export default function useViewReactionDetails()
{
    const navigate = useNavigate();

    return useCallback((reaction: ReactionView) =>
    {
        navigate(`/post/${reaction.postId}/reaction/${reaction.id}`);

    }, [navigate]);
}
