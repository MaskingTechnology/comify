
import { ReactNode, useRef } from 'react';

import useLoadOnScroll from './hooks/useLoadOnScroll';

import Spinner from './Spinner';

type Props = {
    readonly onScroll: () => void;
    readonly isLoading: boolean;
    readonly isFinished: boolean;
    readonly threshold?: number;
    readonly children: ReactNode;
};

export default function Component({ onScroll, isLoading, isFinished, threshold, children }: Props)
{
    const ref = useRef<HTMLDivElement>(null);

    useLoadOnScroll(ref, onScroll, isLoading, isFinished, threshold);

    return <div className='scroll-loader' ref={ref}>
        {children}
        {isLoading && <Spinner />}
    </div>;
}
