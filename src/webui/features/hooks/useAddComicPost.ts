
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { requester } from '^/domain/authentication';
import createPostWithComic from '^/domain/post/createWithComic';

import { useAppContext } from '^/webui/contexts';

export default function useAddComicPost()
{
    const navigate = useNavigate();
    const { identity } = useAppContext();

    return useCallback(async (imageData: string) =>
    {
        await createPostWithComic(requester, imageData);

        navigate(`/profile/${identity?.nickname}`);

    }, [navigate, identity]);
}
