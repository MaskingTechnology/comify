
import { useState } from 'react';

import { Button, Column, Panel, Row, TextArea } from '^/webui/designsystem/module';

export type Props = {
    createHandler: (commentText: string) => Promise<void>;
};

export default function Component({ createHandler }: Props)
{
    const [creating, setCreating] = useState(false);

    const handleCreate = async () =>
    {
        createHandler('Hello world!');
    };

    return <Panel>
        <Column alignX='stretch'>
            <TextArea name='comment' />
            <Row alignX='right'>
                <Button type={creating ? 'disabled' : 'primary'} text={creating ? 'Creating' : 'Create'} clickHandler={handleCreate} />
            </Row>
        </Column>
    </Panel>;
}
