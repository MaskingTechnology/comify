
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { requester } from '^/domain/authentication';
import type { AggregatedData as IdentityModel } from '^/domain/creator/aggregate';
import getMe from '^/domain/creator/getMeAggregated';
import { tenant } from '^/domain/tenant';

import { useAppContext } from '../contexts/AppContext';

export default function useIdentify()
{
    const navigate = useNavigate();
    const context = useAppContext();

    const identify = () =>
    {
        const setIdentity = (identity: IdentityModel) =>
        {
            const redirectLocation = window.sessionStorage.getItem('redirect');

            context.setIdentity(identity);

            navigate(redirectLocation ?? '/timeline');
        };

        const getIdentity = async () =>
        {
            const identity = await getMe(tenant, requester);

            setIdentity(identity);
        };

        getIdentity();
    };

    useEffect(identify, [navigate, context]);
}
