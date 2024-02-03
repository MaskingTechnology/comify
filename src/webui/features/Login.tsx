
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Requester from '../../domain/authentication/Requester';
import getMe from '../../domain/creator/getMe';

export default function Login()
{
    const navigate = useNavigate();

    const logMeIn = async () =>
    {
        const placeholder = new Requester('placeholder', 'placeholder', 'placeholder');
        const me = await getMe(placeholder);

        navigate('/timeline');
    };

    useEffect(() =>
    {
        logMeIn();
    }, []);

    return <>Logging in...</>;
}
