
import { useEffect } from 'react';
import { Button, Column, Panel, Row } from '../../designsystem/module';
import Editor from '../../editor/Editor';

export type Props = {
    createHandler: () => void;
};

export default function Component({ createHandler }: Props)
{
    useEffect(() =>
    {
        const canvas = document.getElementById('editor') as HTMLCanvasElement;

        if (canvas === null)
        {
            throw new Error('Editor canvas not found');
        }

        const editor = new Editor(canvas);
        editor.start();

        return () => { editor.stop(); };
    }, []);

    return <Panel>
        <Column alignX='stretch'>
            <canvas id="editor" />
            <Row alignX='right'>
                <Button text="Create" clickHandler={createHandler} />
            </Row>
        </Column>
    </Panel>;
}
