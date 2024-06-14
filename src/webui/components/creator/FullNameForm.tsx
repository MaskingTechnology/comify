
import { useRef, useState } from 'react';

import UpdateButton from '^/webui/components/common/UpdateButton';
import { Form, Input, Label, Panel, Row, TextBox } from '^/webui/designsystem';

export type Props = {
    readonly fullName: string;
    readonly onUpdateClick: (fullName: string) => Promise<void>;
};

const FULL_NAME_MAX_LENGTH = 100;

type States = 'disabled' | 'submitting' | 'enabled';

export default function Component({ fullName, onUpdateClick }: Props)
{
    const inputRef = useRef<HTMLInputElement>(null);
    const [state, setState] = useState<States>('disabled');

    const handleChange = () =>
    {
        const value = inputRef.current?.value ?? '';

        const newState = value !== fullName ? 'enabled' : 'disabled';

        setState(newState);
    };

    const handleSubmit = async () =>
    {
        const value = inputRef.current?.value ?? '';

        if (value === fullName) return;

        setState('submitting');

        await onUpdateClick(value);

        setState('disabled');
    };

    return <Panel>
        <Form submitHandler={handleSubmit}>
            <Input
                label={<Label value='fullName'></Label>}
                element={<TextBox
                    ref={inputRef}
                    name='fullName'
                    placeholder='new fullName'
                    value={fullName}
                    limit={FULL_NAME_MAX_LENGTH}
                    size='small'
                    required={true}
                    onChange={handleChange}
                />}
            />
            <Row alignX='right'>
                <UpdateButton key={'fullName'} state={state} />
            </Row>
        </Form>
    </Panel>;
}
