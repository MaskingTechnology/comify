
import type { ReactNode } from 'react';

import { useForm } from '@maskingtech/react-toolkit';

import { Button, Form, Row } from '@maskingtech/designsystem';

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
