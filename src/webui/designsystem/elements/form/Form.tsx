
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
        event.preventDefault();

        if (submitHandler)
        {
            submitHandler(event.target as HTMLFormElement);
        }
    };

    return <form onSubmit={handleSubmit} className='form'>
        {children}
    </form>;
}
