
import { type ReactNode } from 'react';

import LoadingIndicator from './elements/LoadingIndicator';
import useRefreshOnPull from './hooks/useRefreshOnPull';

type Props = {
    readonly onRefresh: () => void;
    readonly children: ReactNode;
};

const DISPLAY_HEIGHT_EM = 8;

export default function ({ onRefresh, children }: Props)
{
    const [containerRef, distance, readyToRefresh] = useRefreshOnPull(DISPLAY_HEIGHT_EM, onRefresh);

    return <div ref={containerRef} >
        <div style={{ overflow: 'hidden', height: `${distance}em` }} >
            <LoadingIndicator active={readyToRefresh} />
        </div>
        {children}
    </div>;
}
