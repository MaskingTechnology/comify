
import { Button, Column, Panel, Row, TextArea } from '@maskingtech/designsystem';
import { useFocusOnMount } from '../../hooks';

import type { CancelHandler, CreateHandler } from './hooks/useCreateHandler';
import useCreateHandler from './hooks/useCreateHandler';

type Props = {
    readonly limit?: number;
    readonly onCreate: CreateHandler;
    readonly onCancel: CancelHandler;
};

export default function Component({ limit, onCreate, onCancel }: Props)
{
    const [inputRef, creating, handleCreate, handleCancel] = useCreateHandler(onCreate, onCancel);

    useFocusOnMount(inputRef);

    return <Panel>
        <Column alignX='stretch'>
            <TextArea name='comment' ref={inputRef} limit={limit} />
            <Row alignX='right'>
                <Button type='secondary' text='Cancel' onClick={handleCancel} />
                <Button type={creating ? 'disabled' : 'primary'} text={creating ? 'Creating' : 'Create'} onClick={handleCreate} />
            </Row>
        </Column>
    </Panel>;
}
