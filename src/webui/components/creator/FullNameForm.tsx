
import { useRef } from 'react';

import UpdateButton from '^/webui/components/common/UpdateButton';
import { Form, Input, Label, Panel, Row, TextBox } from '^/webui/designsystem';

export type Props = {
    readonly fullName: string;
    readonly onUpdateClick: (fullName: string) => Promise<void>;
};

const FULL_NAME_MAX_LENGTH = 100;

export default function Component({ fullName, onUpdateClick }: Props)
{
    const inputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = async () =>
    {
        const value = inputRef.current?.value ?? '';

        await onUpdateClick(value);
    };

    return <Panel>
        <Form submitHandler={handleSubmit}>
            <Input
                label={<Label value='Full name'></Label>}
                element={<TextBox
                    ref={inputRef}
                    name='fullName'
                    placeholder={fullName}
                    value={''}
                    limit={FULL_NAME_MAX_LENGTH}
                    size='small'
                    required={true}
                />}
            />
            <Row alignX='right'>
                <UpdateButton />
            </Row>
        </Form>
    </Panel>;
}
