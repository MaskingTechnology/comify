
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export default function useViewPostDetails(postId?: string)
{
    const navigate = useNavigate();

    return useCallback(() =>
    {
        if (postId === undefined)
        {
            return;
        }
        
        navigate(`/posts/${postId}`);

    }, [postId, navigate]);
}
