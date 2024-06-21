
import useRefreshOnPull from './hooks/useRefreshOnPull';

import Spinner from './Spinner';

export type Props = {
    readonly onRefresh: () => void;
    readonly children: React.ReactNode;
};

export default function Component({ onRefresh, children }: Props)
{
    const [containerRef, distance, readyToRefresh] = useRefreshOnPull(onRefresh);

    return <div ref={containerRef} style={{ touchAction: 'none' }} >
        <div style={{ overflow: 'hidden', height: `${distance}px` }} >
            <Spinner active={readyToRefresh} />
        </div>
        {children}
    </div>;
}
