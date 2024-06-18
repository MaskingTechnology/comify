
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import requester from '^/domain/authentication/requester';
import type { AggregatedData as CreatorView } from '^/domain/creator/aggregate/types';
import getMe from '^/domain/creator/getMeAggregated/feature';

import { useAppContext } from '^/webui/contexts';

export function useIdentify()
{
    const navigate = useNavigate();
    const context = useAppContext();

    const getIdentity = () => getMe(requester);

    const setIdentity = (identity: CreatorView) =>
    {
        const redirectLocation = window.sessionStorage.getItem('redirect');

        context.setIdentity(identity);

        navigate(redirectLocation ?? '/timeline');
    };

    const identify = async () =>
    {
        const identity = await getIdentity();

        setIdentity(identity);
    };

    useEffect(() => { identify(); }, []);
}
