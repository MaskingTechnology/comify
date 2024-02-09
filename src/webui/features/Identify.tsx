
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import johnDoe from '../../domain/authentication/johnDoe';
import getMe from '../../domain/creator/getMe';

import { useAppContext } from '../contexts/AppContext';

export default function Feature()
{
    const navigate = useNavigate();
    const context = useAppContext();

    const logMeIn = async () =>
    {
        const originLocation = window.sessionStorage.getItem('loginOrigin');
        const me = await getMe(johnDoe);

        context.setIdentity(me);

        navigate(originLocation || '/timeline');
    };

    useEffect(() => { logMeIn(); }, []);

    return <>Identifying...</>;
}
