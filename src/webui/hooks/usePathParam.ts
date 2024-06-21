
import { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export function usePathParam(index: number, defaultValue?: string)
{
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const [value, setValue] = useState<string | undefined>(undefined);

    const getPathParts = useCallback(() =>
    {
        const path = pathname.endsWith('/')
            ? pathname.slice(0, -1)
            : pathname;

        return path.split('/');

    }, [pathname]);

    useEffect(() =>
    {
        const pathParts = getPathParts();
        const paramValue = pathParts[index];

        setValue(paramValue ?? defaultValue);

    }, [index, defaultValue, getPathParts]);

    useEffect(() =>
    {
        if (value === undefined) return;

        const pathParts = getPathParts();
        pathParts[index] = value;

        navigate(pathParts.join('/'), { replace: true });

    }, [index, value, getPathParts, navigate]);

    return [value, setValue] as const;
}
