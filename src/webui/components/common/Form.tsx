
import { ReactNode, useRef } from 'react';

import { Button, Form, Row } from '^/webui/designsystem';

import { useForm } from '^/webui/hooks';

export type Props = {
    readonly onSubmit: (data: FormData) => Promise<void>;
    readonly children: ReactNode;
};

export default function Component({ onSubmit, children }: Props)
{
    const formRef = useRef<HTMLFormElement>(null);
    const [state, handleSubmit] = useForm(formRef, onSubmit);

    return <Form ref={formRef} submitHandler={handleSubmit}>
        {children}
        <Row alignX='right'>
            <Button
                type={state === 'dirty' ? 'submit' : 'disabled'}
                text={state === 'submitting' ? 'Updating' : 'Update'}
            />
        </Row>
    </Form>;
}