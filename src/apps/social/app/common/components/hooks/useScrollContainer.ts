
import { useEffect, useRef, useState } from 'react';

const SCROLL_PROPERTIES = new Set(['overflow', 'auto', 'scroll']);

export function useScrollContainer()
{
    const childRef = useRef<HTMLDivElement>(null);
    const [container, setContainer] = useState<HTMLElement | undefined>(undefined);

    useEffect(() =>
    {
        const getScrollContainer = () =>
        {
            let parent = childRef.current?.parentElement;

            while (parent)
            {
                const { overflowY } = globalThis.getComputedStyle(parent);

                if (SCROLL_PROPERTIES.has(overflowY))
                {
                    return parent;
                }

                parent = parent.parentElement;
            }

            return undefined;
        };

        const container = getScrollContainer();

        setContainer(container);

    }, [childRef]);

    return [childRef, container] as const;
}
