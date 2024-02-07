
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import johnDoe from '../../domain/authentication/johnDoe';
import getMe from '../../domain/creator/getMe';

import { useAppContext } from '../AppContext';

export default function Feature()
{
    const navigate = useNavigate();
    const context = useAppContext();

    const logMeIn = async () =>
    {
        const me = await getMe(johnDoe);

        context.setIdentity(me);

        navigate('/timeline');
    };

    useEffect(() => { logMeIn(); }, []);

    return <>Logging in...</>;
}
