
import { DependencyList, useCallback, useEffect, useState } from 'react';

type GetData<T> = () => Promise<T>;

export function useLoadData<T>(getData: GetData<T>, deps: DependencyList = [])
{
    const [data, setData] = useState<T | undefined>(undefined);

    const loadData = useCallback(() =>
    {
        let cancelled = false;

        const load = async () =>
        {
            const data = await getData();

            if (cancelled) return;

            setData(data);
        };

        const cancel = () =>
        {
            cancelled = true;
        };

        load();

        return cancel;

    }, [getData]);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(loadData, [getData, ...deps]);

    return [data, setData] as const;
}
