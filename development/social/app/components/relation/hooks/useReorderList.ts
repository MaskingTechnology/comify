
import { useCallback } from 'react';

export default function useReorderList()
{
    return useCallback((newKey: string) =>
    {
        /* eslint-disable-next-line no-console */
        console.log(`Order changed to ${newKey}`);

    }, []);
}
