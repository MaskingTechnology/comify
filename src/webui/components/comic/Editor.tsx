
import { useEffect, useState } from 'react';

import { Button, Column, Panel, Row } from '^/webui/designsystem/module';
import { Editor } from '^/webui/editor/module';

export type Props = {
    createHandler: (imageData: string) => Promise<void>;
};

export default function Component({ createHandler }: Props)
{
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

        await createHandler(imageData);

        setCreating(false);
    };

    useEffect(() =>
    {
        const canvas = document.getElementById('editor') as HTMLCanvasElement;

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
            <canvas id="editor" />
            <Row alignX='right'>
                <Button type={creating ? 'disabled' : 'primary'} text={creating ? 'Creating' : 'Create'} clickHandler={handleCreate} />
            </Row>
        </Column>
    </Panel>;
}
