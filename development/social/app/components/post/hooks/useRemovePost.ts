
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppContext } from '~/components/application';

import { requester } from '@comify/common/security';
import remove from '^/domain/post/remove';

export default function useRemovePost(id?: string)
{
    const navigate = useNavigate();
    const { identity } = useAppContext();

    return useCallback(async () =>
    {
        if (id === undefined) return;

        await remove(requester, id);

        navigate(`/profile/${identity?.nickname}`);

    }, [id, navigate, identity]);
}
