
import { useEffect, useState } from 'react';

type ChangeHandler<T> = (value: T) => void;

export function useDebouncedValue<T>(initialValue: T, onChange: ChangeHandler<T>, delay = 500)
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
