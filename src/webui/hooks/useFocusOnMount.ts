
import { RefObject, useEffect } from 'react';

export function useFocusOnMount(elementRef: RefObject<HTMLElement | null>)
{
    useEffect(() =>
    {
        if (elementRef === null) return;

        elementRef.current?.focus();

    }, [elementRef]);
}
