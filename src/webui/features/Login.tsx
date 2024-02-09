
import React, { useEffect } from 'react';

import getLoginUrl from '../../domain/authentication/getLoginUrl';

export default function Feature()
{
    const redirect = async () =>
    {
        location.href = await getLoginUrl();
    };

    useEffect(() => { redirect(); }, []);

    return <>Redirecting...</>;
}
