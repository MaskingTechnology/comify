
import { useEffect } from 'react';

import getLoginUrl from '../../domain/authentication/getLoginUrl';

const IGNORE_PATHS = ['/', '/login', '/identify'];

export default function Feature()
{
    const redirect = async () =>
    {
        const pathname = window.location.pathname;

        if (IGNORE_PATHS.includes(pathname))
        {
            window.sessionStorage.removeItem('loginOrigin');
        }
        else
        {
            const search = window.location.search;
            const hash = window.location.hash;

            const currentLocation = pathname + search + hash;

            window.sessionStorage.setItem('loginOrigin', currentLocation);
        }


        window.location.href = await getLoginUrl();
    };

    useEffect(() => { redirect(); }, []);

    return <>Redirecting...</>;
}
