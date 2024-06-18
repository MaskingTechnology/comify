
import React, { useEffect, useRef } from 'react';

import { useScrollContainer } from '^/webui/utils';

import Spinner from './Spinner';

const SCROLL_THRESHOLD = 0.7;

type Props = {
    readonly onScroll: () => void;
    readonly isLoading: boolean;
    readonly isFinished: boolean;
    readonly children: React.ReactNode;
};

export default function Component({ onScroll, isLoading, isFinished, children }: Props)
{
    const ref = useRef<HTMLDivElement>(null);
    const container = useScrollContainer(ref);

    useEffect(() =>
    {
        if (container === undefined) return;

        const handleScroll = async () =>
        {
            if (isLoading) return;

            const { scrollTop, clientHeight, scrollHeight } = container;

            if (scrollTop + clientHeight >= scrollHeight * SCROLL_THRESHOLD)
            {
                onScroll();
            }
        };

        isFinished
            ? container.removeEventListener('scroll', handleScroll)
            : container.addEventListener('scroll', handleScroll);

        return () => container.removeEventListener('scroll', handleScroll);

    }, [container, isLoading, isFinished]);

    return <div className='scroll-loader' ref={ref}>
        {children}
        {isLoading && <Spinner />}
    </div>;
}
