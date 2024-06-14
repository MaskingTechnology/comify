
import React, { useEffect, useRef, useState } from 'react';

import getScrollContainer from '^/webui/utils/getScrollContainer';

import EndResult from './EndResult';
import Spinner from './Spinner';

type Props = {
    readonly onTrigger: () => Promise<boolean>;
    readonly threshold: number;
    readonly children: React.ReactNode;
};

export default function ScrollWatcher({ onTrigger, threshold, children }: Props)
{
    const [isTriggering, setIsTriggering] = useState(false);
    const [isFinished, setIsFinished] = useState(false);
    const ref = useRef(null);

    useEffect(() =>
    {
        if (ref.current === null) return;

        const container = getScrollContainer(ref.current);

        if (container === undefined) return;

        let isTriggering = false;

        const trigger = async () =>
        {
            isTriggering = true;

            setIsTriggering(isTriggering);

            const isFinished = await onTrigger();

            if (isFinished) container.removeEventListener('scroll', handleScroll);

            isTriggering = false;

            setIsTriggering(isTriggering);
            setIsFinished(isFinished);
        };

        const handleScroll = async () =>
        {
            if (isTriggering) return;

            const { scrollTop, clientHeight, scrollHeight } = container;

            if (scrollTop + clientHeight >= scrollHeight * threshold)
            {
                await trigger();
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
        {isTriggering && <Spinner />}
        {isFinished && <EndResult />}
    </div>;
}
