
import { useCallback } from 'react';

import { Input, Label, Panel, TextBox } from '^/webui/designsystem';

import Form from '../common/Form';

export type Props = {
    readonly nickname: string;
    readonly alreadyInUse: boolean;
    readonly onUpdate: (nickname: string) => Promise<void>;
};

const NICKNAME_MAX_LENGTH = 20;
const NICKNAME_STRING_PATTERN = '^[a-zA-Z0-9]+$';

export default function Component({ nickname, alreadyInUse, onUpdate }: Props)
{
    const handleSubmit = useCallback((data: FormData) => onUpdate(data.get('nickname') as string), [onUpdate]);

    return <Panel>
        {
            alreadyInUse
                ? <Panel type='error' padding='small'>Sorry, this nickname is already in use.</Panel>
                : null
        }
        <Form onSubmit={handleSubmit}>
            <Input
                label={<Label value='Nickname'></Label>}
                element={<TextBox
                    name='nickname'
                    placeholder='Your nickname'
                    value={nickname}
                    limit={NICKNAME_MAX_LENGTH}
                    pattern={NICKNAME_STRING_PATTERN}
                    title='Only alphanumeric characters are allowed.'
                    size='small'
                    required={true}
                />
                }
            />
        </Form>
    </Panel >;
}
