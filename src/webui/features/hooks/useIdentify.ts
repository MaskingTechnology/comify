
import { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import requester from '^/domain/authentication/requester';
import type { AggregatedData as CreatorView } from '^/domain/creator/aggregate/types';
import getMe from '^/domain/creator/getMeAggregated/feature';

import { useAppContext } from '^/webui/contexts';

export default function useIdentify()
{
    const navigate = useNavigate();
    const context = useAppContext();

    const getIdentity = useCallback(() =>
    {
        return getMe(requester);

    }, []);

    const setIdentity = useCallback((identity: CreatorView) =>
    {
        const redirectLocation = window.sessionStorage.getItem('redirect');

        context.setIdentity(identity);

        navigate(redirectLocation ?? '/timeline');

    }, [context, navigate]);

    const identify = useCallback(async () =>
    {
        const identity = await getIdentity();

        setIdentity(identity);

    }, [getIdentity, setIdentity]);

    useEffect(() =>
    {
        identify();

    }, [identify]);
}
