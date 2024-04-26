
import { useState } from 'react';

import { Button, Column, Panel, Row, TextArea } from '^/webui/designsystem/module';

export type Props = {
    createHandler: (commentText: string) => Promise<void>;
    cancelHandler: () => void;
};

export default function Component({ createHandler, cancelHandler }: Props)
{
    const [creating, setCreating] = useState(false);
    const [comment, setComment] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) =>
    {
        setComment(event.target.value);
    };

    const handleCancel = () =>
    {
        setCreating(false);
        cancelHandler();
    };

    const handleCreate = async () =>
    {
        setCreating(true);
        createHandler(comment);
    };

    return <Panel>
        <Column alignX='stretch'>
            <TextArea name='comment' value={comment} changeHandler={handleChange} />
            <Row alignX='right'>
                <Button type='secondary' text='Cancel' clickHandler={handleCancel} />
                <Button type={creating ? 'disabled' : 'primary'} text={creating ? 'Creating' : 'Create'} clickHandler={handleCreate} />
            </Row>
        </Column>
    </Panel>;
}
