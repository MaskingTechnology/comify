
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export function usePathParam(index: number, defaultValue?: string)
{
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const [value, setValue] = useState('');

    useEffect(() =>
    {
        const currentPath = pathname.endsWith('/')
            ? pathname.slice(0, -1)
            : pathname;

        const pathParts = currentPath.split('/');
        const paramValue = pathParts[index];

        setValue(paramValue ?? defaultValue ?? '');
    }, [index, defaultValue, pathname]);

    useEffect(() =>
    {
        const currentPath = pathname.endsWith('/')
            ? pathname.slice(0, -1)
            : pathname;

        const pathParts = currentPath.split('/');
        pathParts[index] = value ?? '';

        navigate(pathParts.join('/'), { replace: true });

    }, [index, navigate, pathname, value]);

    return [value, setValue] as const;
}
