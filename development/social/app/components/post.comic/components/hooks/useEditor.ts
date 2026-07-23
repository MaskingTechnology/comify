
import { useEffect, useRef, useState } from 'react';

import { Editor } from '../../../editor';

export default function useEditor()
{
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [editor, setEditor] = useState<Editor | undefined>(undefined);

    useEffect(() =>
    {
        const canvas = canvasRef.current;

        if (canvas === null) return;

        const editor = new Editor(canvas);
        editor.start();

        setEditor(editor);

        return () => { editor.stop(); };

    }, [canvasRef]);

    return [canvasRef, editor] as const;
}
