
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import requester from '^/domain/authentication/requester';
import createPost from '^/domain/post/create/feature';

import { useAppContext } from '^/webui/contexts';

export default function useCreateComicPost()
{
    const navigate = useNavigate();
    const { identity } = useAppContext();

    return useCallback(async (imageData: string) =>
    {
        await createPost(requester, imageData);

        navigate(`/profile/${identity?.nickname}`);

    }, [navigate, identity]);
}
