
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { requester } from '@comify/common/security';
import createPostWithComic from '^/domain/post/createWithComic';

import { useAppContext } from '~/components/application';

export default function useAddComicPost()
{
    const navigate = useNavigate();
    const { identity } = useAppContext();

    return useCallback(async (imageData: string) =>
    {
        await createPostWithComic(requester, { imageDataUrl: imageData });

        navigate(`/profile/${identity?.nickname}`);

    }, [navigate, identity]);
}
