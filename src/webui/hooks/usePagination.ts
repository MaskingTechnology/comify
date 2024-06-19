
import { DependencyList, useEffect, useState } from 'react';

type GetData<T> = (page: number) => Promise<T[]>;

export function usePagination<T>(getData: GetData<T>, limit: number, deps: DependencyList = [])
{
    const [data, setData] = useState<T[]>([]);
    const [page, setPage] = useState<number>(0);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isFinished, setIsFinished] = useState<boolean>(false);

    const loadData = () =>
    {
        let cancelled = false;

        const load = async () =>
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

        load();

        return cancel;
    };

    const nextPage = () =>
    {
        setPage(page + 1);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(loadData, [page, getData, limit, ...deps]);

    return [data, isLoading, isFinished, nextPage, setData] as const;
}
