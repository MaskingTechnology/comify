
import { Input, Label, Panel, TextBox } from '^/webui/designsystem';

import Form from '../common/Form';

import useFullNameFormHandler, { SubmitHandler } from './hooks/useFullNameFormHandler';

type Props = {
    readonly fullName: string;
    readonly onSubmit: SubmitHandler;
};

const FULL_NAME_MAX_LENGTH = 100;

export default function Component({ fullName, onSubmit }: Props)
{
    const handleSubmit = useFullNameFormHandler(onSubmit);

    return <Panel>
        <Form onSubmit={handleSubmit}>
            <Input
                label={<Label value='Full name'></Label>}
                element={<TextBox
                    name='fullName'
                    placeholder='Your full name'
                    value={fullName}
                    limit={FULL_NAME_MAX_LENGTH}
                    size='small'
                    required={true}
                />}
            />
        </Form>
    </Panel>;
}
