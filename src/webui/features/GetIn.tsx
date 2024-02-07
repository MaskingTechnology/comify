
import React, { useEffect } from 'react';

import getLoginUrl from '../../domain/authentication/getLoginUrl';

export default function Feature()
{
    const getIn = async () =>
    {
        location.href = await getLoginUrl();
    };

    useEffect(() => { getIn(); }, []);

    return <>Redirecting...</>;
}
