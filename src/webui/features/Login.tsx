
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import getMe from '../../domain/creator/getMe';

export default function Feature()
{
    const navigate = useNavigate();

    const logMeIn = async () =>
    {
        const me = await getMe();
        console.log(me);

        navigate('/timeline');
    };

    useEffect(() =>
    {
        logMeIn();
    }, []);

    return <>Logging in...</>;
}
