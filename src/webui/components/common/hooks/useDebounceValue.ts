
import { useEffect, useState } from 'react';

export type ChangeHandler = (value: string) => void;

export default function useDebounceValue(initialValue: string, onChange: ChangeHandler, delay: number = 500)
{
    const [value, setValue] = useState(initialValue);
    const [debouncedValue, setDebouncedValue] = useState(initialValue);

    useEffect(() =>
    {
        const timer = setTimeout(() => setDebouncedValue(value), delay);

        return () => clearTimeout(timer);

    }, [value, delay]);

    useEffect(() =>
    {
        onChange(debouncedValue);

    }, [debouncedValue, onChange]);

    return [debouncedValue, setValue] as const;
}
