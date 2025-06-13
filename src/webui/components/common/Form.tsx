
import type { ReactNode } from 'react';

import { Button, Form, Row } from '^/webui/designsystem';
import { useForm } from '^/webui/hooks';

type Props = {
    readonly onSubmit: (data: FormData) => Promise<void>;
    readonly children: ReactNode;
};

export default function Component({ onSubmit, children }: Props)
{
    const [formRef, state, handleSubmit] = useForm(onSubmit);

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
