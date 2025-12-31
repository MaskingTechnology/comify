
import { useEffect, useMemo, useState } from 'react';
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

    const path = useMemo(() =>
    {
        if (value === undefined) return;

        const newParameters = [...parameters];

        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        paramIndex === -1
            ? newParameters.push(value)
            // eslint-disable-next-line sonarjs/no-nested-assignment
            : newParameters[paramIndex] = value;

        return newParameters.join('/');

    }, [value, parameters, paramIndex]);

    useEffect(() =>
    {
        setValue(paramValue ?? defaultValue);

    }, [defaultValue, paramValue]);

    useEffect(() =>
    {
        if (path === undefined) return;

        navigate(path);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    return [value, setValue] as const;
}
