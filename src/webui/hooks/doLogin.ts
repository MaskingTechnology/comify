
import { useEffect } from 'react';

import getLoginUrl from '^/domain/authentication/getLoginUrl';

import { awaitData } from '^/webui/utils';

const IGNORE_PATHS = ['/', '/login', '/identify'];

export default function hook()
{
    const setLoginUrl = (loginUrl: string) =>
    {
        const pathname = window.location.pathname;
        const search = window.location.search;
        const hash = window.location.hash;

        const currentLocation = pathname + search + hash;

        IGNORE_PATHS.includes(pathname)
            ? window.sessionStorage.removeItem('redirect')
            : window.sessionStorage.setItem('redirect', currentLocation);

        window.location.href = loginUrl;
    };

    useEffect(() => awaitData(getLoginUrl, setLoginUrl), []);
}
