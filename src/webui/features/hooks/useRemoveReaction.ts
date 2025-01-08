
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { requester } from '^/domain/authentication';
import type { AggregatedData as AggregatedReactionData } from '^/domain/reaction/aggregate';
import remove from '^/domain/reaction/remove';

export default function useRemoveReaction()
{
    const navigate = useNavigate();

    return useCallback(async (reaction: AggregatedReactionData) =>
    {
        await remove(requester, reaction.id);
        navigate(`/post/${reaction.postId}`);

    }, [navigate]);
}
