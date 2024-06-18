import { useEffect, useState } from 'react';

export function useScrollContainer(ref: React.RefObject<HTMLElement>)
{
    const [container, setContainer] = useState<HTMLElement | undefined>(undefined);

    const getScrollContainer = (): HTMLElement | undefined =>
    {
        let parent = ref.current?.parentElement;

        while (parent)
        {
            const { overflowY } = window.getComputedStyle(parent);

            if (['overflow', 'auto', 'scroll'].includes(overflowY))
            {
                return parent;
            }

            parent = parent.parentElement;
        }

        return undefined;
    };

    useEffect(() =>
    {
        const container = getScrollContainer();

        setContainer(container);

    }, [ref.current]);

    return container;
}
