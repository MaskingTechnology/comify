
import { useEffect } from 'react';

import getLoginUrl from '^/domain/authentication/getLoginUrl';

const IGNORE_PATHS = ['/', '/login', '/identify'];

export default function useLogin()
{
    const login = () =>
    {
        const redirect = async () =>
        {
            const loginUrl = await getLoginUrl();

            const pathname = window.location.pathname;
            const search = window.location.search;
            const hash = window.location.hash;

            const currentLocation = pathname + search + hash;

            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            IGNORE_PATHS.includes(pathname)
                ? window.sessionStorage.removeItem('redirect')
                : window.sessionStorage.setItem('redirect', currentLocation);

            window.location.href = loginUrl;
        };

        redirect();
    };

    useEffect(login, []);
}
