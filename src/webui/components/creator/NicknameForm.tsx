
import { useRef } from 'react';

import UpdateButton from '^/webui/components/common/UpdateButton';
import { Form, Input, Label, Panel, Row, TextBox } from '^/webui/designsystem';

export type Props = {
    readonly nickname: string;
    readonly alreadyInUse: boolean;
    readonly onUpdateClick: (nickname: string) => Promise<void>;
};

const NICKNAME_MAX_LENGTH = 20;
const NICKNAME_STRING_PATTERN = '^[a-z0-9_]+$';

export default function Component({ nickname, alreadyInUse, onUpdateClick }: Props)
{
    const inputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = async () =>
    {
        const value = inputRef.current?.value ?? '';

        await onUpdateClick(value);
    };

    return <Panel>
        {
            alreadyInUse
                ? <Panel type='error' padding='small'>Sorry, this nickname is already in use.</Panel>
                : null
        }
        <Form submitHandler={handleSubmit}>
            <Input
                label={<Label value='Nickname'></Label>}
                element={<TextBox
                    reference={inputRef}
                    name='nickname'
                    placeholder={nickname}
                    value={''}
                    limit={NICKNAME_MAX_LENGTH}
                    pattern={NICKNAME_STRING_PATTERN}
                    title='Only alphanumeric characters are allowed.'
                    size='small'
                    required={true}
                />
                }
            />
            <Row alignX='right'>
                <UpdateButton />
            </Row>
        </Form>
    </Panel >;
}
