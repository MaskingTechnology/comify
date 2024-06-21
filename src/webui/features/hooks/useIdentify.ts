
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import requester from '^/domain/authentication/requester';
import type { AggregatedData as CreatorView } from '^/domain/creator/aggregate/types';
import getMe from '^/domain/creator/getMeAggregated/feature';

import { useAppContext } from '^/webui/contexts';

export default function useIdentify()
{
    const navigate = useNavigate();
    const context = useAppContext();

    const identify = () =>
    {
        const setIdentity = (identity: CreatorView) =>
        {
            const redirectLocation = window.sessionStorage.getItem('redirect');

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
