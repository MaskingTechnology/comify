
import React, { useEffect, useRef } from 'react';

import './Modal.css';

type Props = {
    open: boolean,
    width?: string;
    height?: string;
    children: React.ReactNode;
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

    return <dialog ref={ref} className='ds-modal'>
        <form method='dialog' style={{ width, height }}>
            {children}
        </form>
    </dialog>;
}