
import { Button, Column, Panel, Row } from '^/webui/designsystem';

import type { CancelHandler, CreateHandler } from './hooks/useCreateHandler';
import useCreateHandler from './hooks/useCreateHandler';
import useEditor from './hooks/useEditor';

type Props = {
    readonly onCreate: CreateHandler;
    readonly onCancel?: CancelHandler;
};

export default function Component({ onCreate, onCancel }: Props)
{
    const [canvasRef, editor] = useEditor();
    const [creating, handleCreate, handleCancel] = useCreateHandler(editor, onCreate, onCancel);

    return <Panel>
        <Column alignX='stretch'>
            <canvas ref={canvasRef} />
            <Row alignX='right'>
                {
                    onCancel !== undefined
                        ? <Button type='secondary' text='Cancel' onClick={handleCancel} />
                        : null
                }
                <Button type={creating ? 'disabled' : 'primary'} text={creating ? 'Creating' : 'Create'} onClick={handleCreate} />
            </Row>
        </Column>
    </Panel>;
}
