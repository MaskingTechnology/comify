
import { useState } from 'react';

import { Button, Column, Panel, Row, TextArea } from '^/webui/designsystem';

type Props = {
    readonly limit?: number;
    readonly onCreate: (commentText: string) => Promise<void>;
    readonly onCancel: () => void;
};

export default function Component({ limit, onCreate, onCancel }: Props)
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
            <TextArea name='comment' limit={limit} onChange={handleChange} />
            <Row alignX='right'>
                <Button type='secondary' text='Cancel' onClick={handleCancel} />
                <Button type={creating ? 'disabled' : 'primary'} text={creating ? 'Creating' : 'Create'} onClick={handleCreate} />
            </Row>
        </Column>
    </Panel>;
}
