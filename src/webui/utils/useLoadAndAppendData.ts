
import { useEffect, useState } from 'react';

type GetData<T> = (page: number) => Promise<T[]>;

export function useLoadAndAppendData<T>(getData: GetData<T>, limit: number)
{
    const [data, setData] = useState<T[]>([]);
    const [page, setPage] = useState<number>(0);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isFinished, setIsFinished] = useState<boolean>(false);

    const loadData = () =>
    {
        let cancelled = false;

        const loadData = async () =>
        {
            setIsLoading(true);

            const data = await getData(page);

            setIsLoading(false);

            if (data.length < limit) setIsFinished(true);

            if (cancelled) return;

            setData(currentData => [...currentData, ...data]);
        };

        const cancel = () =>
        {
            cancelled = true;
        };

        loadData();

        return cancel;
    };

    const next = () =>
    {
        setPage(page + 1);
    };

    useEffect(loadData, [page]);

    return [data, isLoading, isFinished, next] as const;
}
