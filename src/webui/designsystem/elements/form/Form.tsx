
import React from 'react';
import './Form.css';

export type Props = {
    readonly children: React.ReactNode;
    readonly submitHandler?: (form: HTMLFormElement) => void;
};

export default function Element({ children, submitHandler }: Props)
{
    const handleSubmit = (event: React.FormEvent<HTMLElement>) =>
    {
        if (submitHandler)
        {
            submitHandler(event.target as HTMLFormElement);
        }

        event.preventDefault();
    };

    return <form onSubmit={handleSubmit} className='ds-form'>
        {children}
    </form>;
}
