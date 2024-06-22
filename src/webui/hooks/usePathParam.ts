
import { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

export function usePathParam(paramName: string, defaultValue?: string)
{
    const navigate = useNavigate();
    const params = useParams();
    const { pathname } = useLocation();
    const [value, setValue] = useState<string | undefined>(undefined);

    const getPathInfo = useCallback(() =>
    {
        const path = pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
        const parts = path.split('/');

        const paramValue = params[paramName];
        const paramIndex = parts.indexOf(paramValue ?? '###');

        return { parts, paramValue, paramIndex };

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname]);

    const createPath = useCallback(() =>
    {
        if (value === undefined) return;

        const { parts, paramIndex, paramValue } = getPathInfo();

        if (paramValue === value) return;

        paramIndex === -1
            ? parts.push(value)
            : parts[paramIndex] = value;

        return parts.join('/');

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value, getPathInfo]);

    useEffect(() =>
    {
        const { paramValue } = getPathInfo();

        setValue(paramValue ?? defaultValue);

    }, [defaultValue, getPathInfo]);

    useEffect(() =>
    {
        const newPath = createPath();

        if (newPath === undefined) return;

        navigate(newPath);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    return [value, setValue] as const;
}
