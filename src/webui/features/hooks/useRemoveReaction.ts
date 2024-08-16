
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppContext } from '^/webui/contexts';

import requester from '^/domain/authentication/requester';
import type { AggregatedData as ReactionView } from '^/domain/reaction/aggregate/types';
import remove from '^/domain/reaction/remove/feature';

export default function useRemoveReaction()
{
    const navigate = useNavigate();
    const { identity } = useAppContext();

    return useCallback(async (reaction: ReactionView) =>
    {

        await remove(requester, reaction.id);
        navigate(`/post/${reaction.postId}`);

    }, [navigate, identity]);
}
