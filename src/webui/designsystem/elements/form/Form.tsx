
import { FormEvent, ReactNode, forwardRef } from 'react';
import './Form.css';

export type Props = {
    readonly children: ReactNode;
    readonly submitHandler?: (form: HTMLFormElement) => void;
};

type Ref = HTMLFormElement;

export default forwardRef<Ref, Props>(function Element({ children, submitHandler }, ref)
{
    const handleSubmit = (event: FormEvent<HTMLElement>) =>
    {
        event.preventDefault();

        if (submitHandler)
        {
            submitHandler(event.target as HTMLFormElement);
        }
    };

    return <form onSubmit={handleSubmit} className='form' ref={ref}>
        {children}
    </form>;
});
