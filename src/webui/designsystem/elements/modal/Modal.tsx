
import React, { useEffect, useRef } from 'react';

import './Modal.css';

type Props = {
    readonly open: boolean,
    readonly width?: string;
    readonly height?: string;
    readonly children: React.ReactNode;
};

export default function Element({ open, width, height, children }: Props)
{
    const ref = useRef<HTMLDialogElement>(null);

    width ??= 'auto';
    height ??= 'auto';

    useEffect(() =>
    {
        open
            ? ref.current?.showModal()
            : ref.current?.close();
    }, [open]);

    return <dialog ref={ref} className='modal'>
        <form method='dialog' style={{ width, height }}>
            {children}
        </form>
    </dialog>;
}
