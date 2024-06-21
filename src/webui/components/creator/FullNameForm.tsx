
import { useCallback } from 'react';

import { Input, Label, Panel, TextBox } from '^/webui/designsystem';

import Form from '../common/Form';

export type Props = {
    readonly fullName: string;
    readonly onSubmit: (fullName: string) => Promise<void>;
};

const FULL_NAME_MAX_LENGTH = 100;

export default function Component({ fullName, onSubmit }: Props)
{
    const handleSubmit = useCallback((data: FormData) => onSubmit(data.get('fullName') as string), [onSubmit]);

    return <Panel>
        <Form onSubmit={handleSubmit}>
            <Input
                label={<Label value='Full name'></Label>}
                element={<TextBox
                    name='fullName'
                    placeholder='Your full name'
                    value={fullName}
                    limit={FULL_NAME_MAX_LENGTH}
                    size='small'
                    required={true}
                />}
            />
        </Form>
    </Panel>;
}
