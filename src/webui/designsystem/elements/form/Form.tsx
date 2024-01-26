
import React from 'react';

import './Form.css';

export type Props = {
    children: React.ReactNode;
    submitHandler?: React.FormEventHandler<HTMLFormElement>;
};

export default function Element({ children, submitHandler }: Props)
{
    return <form onSubmit={submitHandler} className='ds-form'>
        {children}
    </form>;
}
