
import { useCallback } from 'react';

export default function useReorderList()
{
    return useCallback((oldKey: string, newKey: string) =>
    {
        /* eslint-disable-next-line no-console */
        console.log(`Order changed from ${oldKey} to ${newKey}`);

    }, []);
}
