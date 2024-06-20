
import { useCallback } from 'react';

import { Input, Label, Panel, TextBox } from '^/webui/designsystem';

import Form from '../common/Form';

export type Props = {
    readonly fullName: string;
    readonly onUpdate: (fullName: string) => Promise<void>;
};

const FULL_NAME_MAX_LENGTH = 100;

export default function Component({ fullName, onUpdate }: Props)
{
    const handleSubmit = useCallback((data: FormData) => onUpdate(data.get('fullName') as string), [onUpdate]);

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
