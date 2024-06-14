
import React, { useEffect, useRef } from 'react';

import getScrollContainer from '^/webui/utils/getScrollContainer';

type Props = {
    readonly onTrigger: () => Promise<boolean>;
    readonly threshold: number;
    readonly children: React.ReactNode;
};

export default function ScrollWatcher({ onTrigger, threshold, children }: Props)
{
    const ref = useRef(null);

    useEffect(() =>
    {
        if (ref.current === null) return;

        const container = getScrollContainer(ref.current);

        if (container === undefined) return;

        let isLoading = false;

        const handleScroll = async () =>
        {
            console.log('loading', isLoading);

            if (isLoading) return;

            const { scrollTop, clientHeight, scrollHeight } = container;

            if (scrollTop + clientHeight >= scrollHeight * threshold)
            {
                isLoading = true;

                const finished = await onTrigger();

                if (finished) container.removeEventListener('scroll', handleScroll);

                isLoading = false;
            }
        };

        container.addEventListener('scroll', handleScroll);

        return () =>
        {
            container.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return <div className={'scroll watcher'} ref={ref}>
        {children}
    </div>;
}
