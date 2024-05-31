
import { useRef } from 'react';

import UpdateButton from '^/webui/components/common/UpdateButton';
import { Form, Input, Label, Panel, Row, TextBox } from '^/webui/designsystem';

export type Props = {
    readonly fullName: string;
    readonly onUpdateClick: (fullName: string) => Promise<void>;
};

export default function Component({ fullName, onUpdateClick }: Props)
{
    const inputRef = useRef<HTMLInputElement>(null);

    const handleClick = async () =>
    {
        const value = inputRef.current?.value ?? '';

        await onUpdateClick(value);
    };

    return <Panel>
        <Form submitHandler={handleClick}>
            <Input
                label={<Label value='Full name'></Label>}
                element={<TextBox
                    reference={inputRef}
                    name='fullName'
                    placeholder={fullName}
                    value={''}
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
