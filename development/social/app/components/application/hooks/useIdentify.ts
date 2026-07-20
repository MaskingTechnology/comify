
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { requester } from '@comify/common/security';
import type { Creator } from '^/domain/creator';
import getMe from '^/domain/creator/getMe';

import { useAppContext } from '../contexts/AppContext';

export default function useIdentify()
{
    const navigate = useNavigate();
    const context = useAppContext();

    const identify = () =>
    {
        const setIdentity = (identity: Creator) =>
        {
            const redirectLocation = globalThis.sessionStorage.getItem('redirect');

            context.setIdentity(identity);

            navigate(redirectLocation ?? '/timeline');
        };

        const getIdentity = async () =>
        {
            const identity = await getMe(requester);

            setIdentity(identity);
        };

        getIdentity();
    };

    useEffect(identify, [navigate, context]);
}
