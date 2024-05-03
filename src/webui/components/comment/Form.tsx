
import { useState } from 'react';

import { Button, Column, Panel, Row, TextArea } from '^/webui/designsystem';

export type Props = {
    readonly onCreate: (commentText: string) => Promise<void>;
    readonly onCancel: () => void;
};

export default function Component({ onCreate, onCancel }: Props)
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

        onCancel();
    };

    const handleCreate = async () =>
    {
        setCreating(true);

        await onCreate(comment);

        setCreating(false);
    };

    return <Panel>
        <Column alignX='stretch'>
            <TextArea name='comment' onChange={handleChange} />
            <Row alignX='right'>
                <Button type='secondary' text='Cancel' onClick={handleCancel} />
                <Button type={creating ? 'disabled' : 'primary'} text={creating ? 'Creating' : 'Create'} onClick={handleCreate} />
            </Row>
        </Column>
    </Panel>;
}
