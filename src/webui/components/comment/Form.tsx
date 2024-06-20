
import { useRef } from 'react';

import { Button, Column, Panel, Row, TextArea } from '^/webui/designsystem';
import { useFocusOnMount } from '^/webui/hooks';

import useCreateHandler, { CancelHandler, CreateHandler } from './hooks/useCreateHandler';

type Props = {
    readonly limit?: number;
    readonly onCreate: CreateHandler;
    readonly onCancel: CancelHandler;
};

export default function Component({ limit, onCreate, onCancel }: Props)
{
    const ref = useRef<HTMLTextAreaElement>(null);
    const [creating, handleCreate, handleCancel] = useCreateHandler(ref, onCreate, onCancel);

    useFocusOnMount(ref);

    return <Panel>
        <Column alignX='stretch'>
            <TextArea name='comment' ref={ref} limit={limit} />
            <Row alignX='right'>
                <Button type='secondary' text='Cancel' onClick={handleCancel} />
                <Button type={creating ? 'disabled' : 'primary'} text={creating ? 'Creating' : 'Create'} onClick={handleCreate} />
            </Row>
        </Column>
    </Panel>;
}
