
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

    }, [params, paramName, pathname]);

    useEffect(() =>
    {
        const { paramValue } = getPathInfo();

        setValue(paramValue ?? defaultValue);

    }, [defaultValue, getPathInfo]);

    useEffect(() =>
    {
        if (value === undefined) return;

        const { parts, paramIndex, paramValue } = getPathInfo();

        if (paramValue === value) return;

        paramIndex === -1
            ? parts.push(value)
            : parts[paramIndex] = value;

        const newPath = parts.join('/');

        navigate(newPath);

    }, [value, navigate, getPathInfo]);

    return [value, setValue] as const;
}
