
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import type { AggregatedData as CreatorView } from '^/domain/creator/aggregate/types';
import getMe from '^/domain/creator/getMeAggregated/feature';

import { useAppContext } from '^/webui/contexts';
import { awaitData } from '^/webui/utils';

export function useIdentify()
{
    const navigate = useNavigate();
    const context = useAppContext();

    useEffect(() => 
    {
        const getIdentity = () => getMe(requester);

        const setIdentity = (identity: CreatorView) =>
        {
            const redirectLocation = window.sessionStorage.getItem('redirect');

            context.setIdentity(identity);

            navigate(redirectLocation ?? '/timeline');
        };

        awaitData(getIdentity, setIdentity);

    }, [context, navigate]);
}
