
import React, { useEffect } from 'react';

import Requester from '../../domain/authentication/Requester';
import getMe from '../../domain/creator/getMe';

export default function Login()
{
    const logMeIn = async () =>
    {
        const placeholder = new Requester('placeholder', 'placeholder', 'placeholder');
        const me = await getMe(placeholder);

        console.log('logMeIn', me.fullName);
    };

    useEffect(() =>
    {
        logMeIn();
    }, []);

    return <>Logging in...</>;
}
