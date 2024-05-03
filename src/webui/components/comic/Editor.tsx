
import { useEffect, useRef, useState } from 'react';

import { Button, Column, Panel, Row } from '^/webui/designsystem';
import { Editor } from '^/webui/editor';

export type Props = {
    readonly onCreate: (imageData: string) => Promise<void>;
    readonly onCancel?: () => void;
};

export default function Component({ onCreate, onCancel }: Props)
{
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [editor, setEditor] = useState<Editor | undefined>(undefined);
    const [creating, setCreating] = useState(false);

    const handleCreate = async () =>
    {
        if (editor === undefined)
        {
            throw new Error('Editor not found');
        }

        const imageData = editor.export();

        setCreating(true);

        await onCreate(imageData);

        setCreating(false);
    };

    useEffect(() =>
    {
        const canvas = canvasRef.current;

        if (canvas === null)
        {
            throw new Error('Editor canvas not found');
        }

        const editor = new Editor(canvas);
        editor.start();

        setEditor(editor);

        return () => { editor.stop(); };
    }, []);

    return <Panel>
        <Column alignX='stretch'>
            <canvas ref={canvasRef} />
            <Row alignX='right'>
                {
                    onCancel !== undefined
                        ? <Button type='secondary' text='Cancel' onClick={onCancel} />
                        : null
                }
                <Button type={creating ? 'disabled' : 'primary'} text={creating ? 'Creating' : 'Create'} onClick={handleCreate} />
            </Row>
        </Column>
    </Panel>;
}
