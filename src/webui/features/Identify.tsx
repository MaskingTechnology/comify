
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import johnDoe from '^/domain/authentication/johnDoe';
import getMe from '^/domain/creator/getMe';
import type CreatorView from '^/domain/creator/view/CreatorView';

import { useAppContext } from '^/webui/contexts/module';
import { awaitData } from '^/webui/utils/module';

export default function Feature()
{
    const navigate = useNavigate();
    const context = useAppContext();

    const getIdentity = () => getMe(johnDoe);

    const setIdentity = (identity: CreatorView) =>
    {
        const redirectLocation = window.sessionStorage.getItem('redirect');

        context.setIdentity(identity);

        navigate(redirectLocation ?? '/timeline');
    };

    useEffect(() => awaitData(getIdentity, setIdentity), []);

    return <>Identifying...</>;
}
