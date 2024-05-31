
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import type { AggregatedData as PostView } from '^/domain/post/aggregate/types';
import get from '^/domain/post/getByIdAggregated/feature';

import { awaitData } from '^/webui/utils';

export function usePost()
{
    const { postId } = useParams();
    const [post, setPost] = useState<PostView | undefined>(undefined);

    useEffect(() => 
    {
        if (postId !== undefined)
        {
            const getPost = () => get(requester, postId);

            awaitData(getPost, setPost);
        }
    }, [postId]);

    return [post, setPost] as const;
}
