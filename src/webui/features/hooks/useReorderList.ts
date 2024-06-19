
import { useCallback } from 'react';

export default function useReorderList()
{
    return useCallback((oldKey: string, newKey: string) =>
    {
        console.log(`Order changed from ${oldKey} to ${newKey}`);

    }, []);
}
