import { useCallback, useEffect, useState } from 'react';

const SCROLL_PROPERTIES = ['overflow', 'auto', 'scroll'];

export function useScrollContainer(ref: React.RefObject<HTMLElement>)
{
    const [container, setContainer] = useState<HTMLElement | undefined>(undefined);

    const getScrollContainer = useCallback((): HTMLElement | undefined =>
    {
        let parent = ref.current?.parentElement;

        while (parent)
        {
            const { overflowY } = window.getComputedStyle(parent);

            if (SCROLL_PROPERTIES.includes(overflowY))
            {
                return parent;
            }

            parent = parent.parentElement;
        }

        return undefined;

    }, [ref]);

    useEffect(() =>
    {
        const container = getScrollContainer();

        setContainer(container);

    }, [getScrollContainer, ref]);

    return container;
}
