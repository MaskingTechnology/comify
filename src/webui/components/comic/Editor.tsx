
import { useEffect, useState } from 'react';
import { Button, Column, Panel, Row } from '../../designsystem/module';
import Editor from '../../editor/Editor';

export type Props = {
    createHandler: (imageData: string) => void;
};

export default function Component({ createHandler }: Props)
{
    const [editor, setEditor] = useState<Editor | undefined>(undefined);

    const handleCreate = () =>
    {
        if (editor === undefined)
        {
            throw new Error('Editor not found');
        }

        const imageData = editor.export();

        createHandler(imageData);
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
                <Button text="Create" clickHandler={handleCreate} />
            </Row>
        </Column>
    </Panel>;
}
