
import React from 'react';

import './Form.css';

export type FormProps = {
    children: React.ReactNode;
    submitHandler: React.FormEventHandler<HTMLFormElement>;
};

export default function Submit(props: FormProps)
{
    return <form onSubmit={props.submitHandler} className='ds-form'>
        {props.children}
    </form>;
}
