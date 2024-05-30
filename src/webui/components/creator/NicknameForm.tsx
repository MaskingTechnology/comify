
import UpdateButton from '^/webui/components/common/UpdateButton';
import { Form, Input, Label, Panel, Row, TextBox } from '^/webui/designsystem';
import { useRef } from 'react';

export type Props = {
    nickname: string;
    alreadyInUse: boolean;
    onUpdateClick: (nickname: string) => Promise<void>;
};

export default function Component({ nickname, alreadyInUse, onUpdateClick }: Props)
{
    const inputRef = useRef<HTMLInputElement>(null);
    const handleClick = async () =>
    {
        const value = inputRef.current?.value ?? '';

        await onUpdateClick(value);
    };

    return <Panel>
        {
            alreadyInUse
                ? <Panel type='error' padding='small'>Sorry, this nickname is already in use. </Panel>
                : null
        }
        <Form submitHandler={handleClick}>
            <Input
                label={<Label value='Nickname'></Label>}
                element={<TextBox
                    reference={inputRef}
                    name='nickname'
                    placeholder={nickname}
                    value={''}
                    pattern="^(?!.*[\s_]).+$"
                    title='underscores and spaces not allowed'
                    size='small'
                    required={true}
                />
                }
            />
            <Row alignX='right'>
                <UpdateButton></UpdateButton>
            </Row>
        </Form>
    </Panel >;
}
