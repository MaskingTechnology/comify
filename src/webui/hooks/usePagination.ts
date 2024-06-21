
import { DependencyList, useCallback, useEffect, useState } from 'react';

type GetData<T> = (page: number) => Promise<T[]>;

export function usePagination<T>(getData: GetData<T>, limit: number, deps: DependencyList = [])
{
    const [data, setData] = useState<T[]>([]);
    const [page, setPage] = useState<number>(0);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isFinished, setIsFinished] = useState<boolean>(false);
    const [resetCount, setResetCount] = useState<number>(0);

    const loadData = useCallback(() =>
    {
        let cancelled = false;

        const load = async () =>
        {
            setIsLoading(true);

            const data = await getData(page);

            if (data.length < limit) setIsFinished(true);

            if (cancelled) return;

            setIsLoading(false);

            setData(currentData => [...currentData, ...data]);
        };

        const cancel = () =>
        {
            cancelled = true;
        };

        load();

        return cancel;

    }, [getData, limit, page]);

    const nextPage = useCallback(() =>
    {
        setPage(page => page + 1);

    }, []);

    const reset = useCallback(() =>
    {
        setData([]);
        setIsFinished(false);
        setPage(0);
        setResetCount(count => count + 1);

    }, []);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(reset, [getData, limit, ...deps]);

    useEffect(loadData, [getData, loadData, page, resetCount]);

    return [data, isLoading, isFinished, nextPage, setData, reset] as const;
}
