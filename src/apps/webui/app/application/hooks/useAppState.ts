
import { useEffect, useState } from 'react';

import { useAppContext } from '../contexts/AppContext';

export default function useAppState<T>(key: string, initialValue?: T)
{
    const { appState } = useAppContext();

    const [value, setValue] = useState<T | undefined>(appState.get(key) as T ?? initialValue);

    useEffect(() =>
    {
        if (appState.get(key) === value) return;
        
        appState.set(key, value);
        
    }, [key, value, appState]);

    return [value, setValue] as const;
}
