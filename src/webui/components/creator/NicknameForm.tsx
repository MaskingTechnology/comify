
import { Input, Label, Panel, TextBox } from '^/webui/designsystem';

import Form from '../common/Form';

import type { SubmitHandler } from './hooks/useNicknameFormHandler';
import useNicknameFormHandler from './hooks/useNicknameFormHandler';

type Props = {
    readonly nickname: string;
    readonly alreadyInUse: boolean;
    readonly onSubmit: SubmitHandler;
};

const NICKNAME_MAX_LENGTH = 20;
const NICKNAME_STRING_PATTERN = '^[a-z0-9]+$';

export default function Component({ nickname, alreadyInUse, onSubmit }: Props)
{
    const handleSubmit = useNicknameFormHandler(onSubmit);

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
                    title='Only lowercase characters and numbers are allowed.'
                    size='small'
                    required={true}
                />
                }
            />
        </Form>
    </Panel >;
}
