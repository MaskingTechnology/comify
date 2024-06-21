
import { RefObject, useEffect } from 'react';

export function useFocusOnMount(elementRef: RefObject<HTMLElement>)
{
    useEffect(() =>
    {
        elementRef.current?.focus();

    }, [elementRef]);
}
