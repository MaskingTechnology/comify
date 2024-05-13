
import UpdateButton from '^/webui/components/common/UpdateButton';
import { Form, Input, Label, Panel, Row, TextBox } from '^/webui/designsystem';
import { useRef } from 'react';

export type Props = {
    nickname: string;
    onUpdateClick: (nickname: string) => Promise<void>;
};

export default function Component({ nickname, onUpdateClick }: Props)
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
                label={<Label value='Nickname'></Label>}
                element={<TextBox
                    reference={inputRef}
                    name='nickname'
                    value={nickname}
                    size='small' />} >
            </Input>
            <Row alignX='right'>
                <UpdateButton onClick={handleClick} ></UpdateButton>
            </Row>
        </Form>
    </Panel >;
}