
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

export function usePathParam(paramName: string, defaultValue?: string)
{
    const navigate = useNavigate();
    const { [paramName]: paramValue } = useParams();
    const { pathname } = useLocation();
    const [value, setValue] = useState<string | undefined>(undefined);

    const parameters = useMemo(() =>
    {
        const path = pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;

        return path.split('/');

    }, [pathname]);

    const paramIndex = useMemo(() =>
    {
        return parameters.indexOf(paramValue ?? '###');

    }, [parameters, paramValue]);

    const createPath = useCallback(() =>
    {
        if (value === undefined) return;

        paramIndex === -1
            ? parameters.push(value)
            : parameters[paramIndex] = value;

        return parameters.join('/');

    }, [value, parameters, paramIndex]);

    useEffect(() =>
    {
        setValue(paramValue ?? defaultValue);

    }, [defaultValue, paramValue]);

    useEffect(() =>
    {
        const newPath = createPath();

        if (newPath === undefined) return;

        navigate(newPath);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    return [value, setValue] as const;
}
