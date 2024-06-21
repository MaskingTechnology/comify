
import { ReactNode } from 'react';

import useRefreshOnPull from './hooks/useRefreshOnPull';

import Spinner from './Spinner';

type Props = {
    readonly onRefresh: () => void;
    readonly children: ReactNode;
};

const CONVERSION_FACTOR = 16;

export default function Component({ onRefresh, children }: Props)
{
    const [containerRef, distance, readyToRefresh] = useRefreshOnPull(CONVERSION_FACTOR, onRefresh);

    return <div ref={containerRef} style={{ touchAction: 'none' }} >
        <div style={{ overflow: 'hidden', height: `${distance}em` }} >
            <Spinner active={readyToRefresh} />
        </div>
        {children}
    </div>;
}
