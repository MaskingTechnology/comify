
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAppContext } from '~/app/application';

import { requester } from '^/domain/authentication';
import remove from '^/domain/post/remove';
import { tenant } from '^/domain/tenant';

export default function useRemovePost(id?: string)
{
    const navigate = useNavigate();
    const { identity } = useAppContext();

    return useCallback(async () =>
    {
        if (id === undefined) return;

        await remove(tenant, requester, id);

        navigate(`/profile/${identity?.nickname}`);

    }, [navigate, identity]);
}
