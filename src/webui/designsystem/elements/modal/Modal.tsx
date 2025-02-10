
import { ReactNode, useEffect, useRef } from 'react';

import './Modal.css';

type Props = {
    readonly open: boolean,
    readonly sizing?: 'full' | 'content';
    readonly children?: ReactNode;
};

export default function Element({ open, sizing = 'content', children }: Props)
{
    const ref = useRef<HTMLDialogElement>(null);

    const className = 'modal'
        + ' sizing-' + sizing;

    useEffect(() =>
    {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        open
            ? ref.current?.showModal()
            : ref.current?.close();
    }, [open]);

    return <dialog ref={ref} className={className}>
        <form method='dialog'>
            {children}
        </form>
    </dialog>;
}
