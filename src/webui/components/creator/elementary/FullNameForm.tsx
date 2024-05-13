
import UpdateButton from '^/webui/components/common/UpdateButton';
import { Form, Input, Label, Panel, Row, TextBox } from '^/webui/designsystem';
import { useRef } from 'react';


export type Props = {
    fullName: string;
    onUpdateClick: (fullName: string) => Promise<void>;
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
        <Form>
            <Input
                label={<Label value='FullName'></Label>}
                element={<TextBox
                    reference={inputRef}
                    name='fullName'
                    value={fullName}
                    size='small' />}
            />
            <Row alignX='right'>
                <UpdateButton onClick={handleClick}></UpdateButton>
            </Row>
        </Form>
    </Panel>;
}
