
import { ReactNode } from 'react';

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
    const [childRef] = useLoadOnScroll(onScroll, isLoading, isFinished, threshold);

    return <div className='scroll-loader' ref={childRef}>
        {children}
        {isLoading && <Spinner />}
    </div>;
}
