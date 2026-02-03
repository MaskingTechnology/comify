
import type { ReactNode } from 'react';

import LoadingIndicator from './elements/LoadingIndicator';
import type { LoadHandler } from './hooks/useLoadOnScroll';
import useLoadOnScroll from './hooks/useLoadOnScroll';

type Props = {
    readonly onLoad: LoadHandler;
    readonly isLoading: boolean;
    readonly isFinished: boolean;
    readonly threshold?: number;
    readonly children: ReactNode;
};

export default function Component({ onLoad, isLoading, isFinished, threshold, children }: Props)
{
    const [childRef] = useLoadOnScroll(onLoad, isLoading, isFinished, threshold);

    return <div ref={childRef}>
        {children}
        {isLoading && <LoadingIndicator />}
    </div>;
}
