
import { useRef, useState } from 'react';

import UpdateButton from '^/webui/components/common/UpdateButton';
import { Form, Input, Label, Panel, Row, TextBox } from '^/webui/designsystem';

export type Props = {
    readonly nickname: string;
    readonly alreadyInUse: boolean;
    readonly onUpdateClick: (nickname: string) => Promise<void>;
};

type States = 'disabled' | 'submitting' | 'enabled';
const NICKNAME_MAX_LENGTH = 20;
const NICKNAME_STRING_PATTERN = '^[a-z0-9_]+$';

export default function Component({ nickname, alreadyInUse, onUpdateClick }: Props)
{
    const inputRef = useRef<HTMLInputElement>(null);
    const [state, setState] = useState<States>('disabled');

    const handleChange = () =>
    {
        const value = inputRef.current?.value ?? '';
        const newState = value !== nickname ? 'enabled' : 'disabled';

        setState(newState);
    };

    const handleSubmit = async () =>
    {
        const value = inputRef.current?.value ?? '';

        if (value === nickname) return;

        setState('submitting');

        await onUpdateClick(value);

        setState('disabled');
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
                    placeholder='new nickname'
                    value={nickname}
                    pattern="^(?!.*[\s_]).+$"
                    title='Underscores and spaces are not allowed'
                    limit={NICKNAME_MAX_LENGTH}
                    // pattern={NICKNAME_STRING_PATTERN}
                    // title='Only alphanumeric characters are allowed.'
                    size='small'
                    required={true}
                    onChange={handleChange}
                />
                }
            />
            <Row alignX='right'>
                <UpdateButton key={'nickname'} state={state} />
            </Row>
        </Form>
    </Panel >;
}
