
import { useEffect } from 'react';

import getLoginUrl from '^/domain/authentication/getLoginUrl';

const IGNORE_PATHS = new Set(['/', '/login', '/identify']);

export default function useLogin()
{
    const login = () =>
    {
        const redirect = async () =>
        {
            const loginUrl = await getLoginUrl();

            const pathname = globalThis.location.pathname;
            const search = globalThis.location.search;
            const hash = globalThis.location.hash;

            const currentLocation = pathname + search + hash;

            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            IGNORE_PATHS.has(pathname)
                ? globalThis.sessionStorage.removeItem('redirect')
                : globalThis.sessionStorage.setItem('redirect', currentLocation);

            globalThis.location.href = loginUrl;
        };

        redirect();
    };

    useEffect(login, []);
}
