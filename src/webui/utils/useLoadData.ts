
import { DependencyList, useEffect, useState } from 'react';

type GetData<T> = () => Promise<T>;

export function useLoadData<T>(getData: GetData<T>, deps: DependencyList = [])
{
    const [data, setData] = useState<T | undefined>(undefined);

    useEffect(() =>
    {
        let cancelled = false;

        const loadData = async () =>
        {
            const data = await getData();

            if (cancelled) return;

            setData(data);
        };

        const cancel = () =>
        {
            cancelled = true;
        };

        loadData();

        return cancel;
    }, deps);

    return [data, setData] as const;
}
