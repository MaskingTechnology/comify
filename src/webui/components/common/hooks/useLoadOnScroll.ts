
import { useEffect } from 'react';

import { useScrollContainer } from './useScrollContainer';

export type LoadHandler = () => void;

const DEFAULT_SCROLL_THRESHOLD = 0.7;

export default function useLoadOnScroll(onLoad: LoadHandler, isLoading: boolean, isFinished: boolean, threshold: number = DEFAULT_SCROLL_THRESHOLD)
{
    const [childRef, container] = useScrollContainer();

    useEffect(() =>
    {
        if (container === undefined) return;

        const handleScroll = async () =>
        {
            if (isLoading) return;

            const { scrollTop, clientHeight, scrollHeight } = container;
            const isAtThreshold = scrollTop + clientHeight >= scrollHeight * threshold;

            if (isAtThreshold)
            {
                onLoad();
            }
        };

        isFinished
            ? container.removeEventListener('scroll', handleScroll)
            : container.addEventListener('scroll', handleScroll);

        return () => container.removeEventListener('scroll', handleScroll);

    }, [container, onLoad, isLoading, isFinished, threshold]);

    return [childRef] as const;
}
