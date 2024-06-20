
import { RefObject, useEffect, useState } from 'react';

import { Editor } from '^/webui/editor';

export default function useEditor(ref: RefObject<HTMLCanvasElement>)
{
    const [editor, setEditor] = useState<Editor | undefined>(undefined);

    useEffect(() =>
    {
        const canvas = ref.current;

        if (canvas === null) return;

        const editor = new Editor(canvas);
        editor.start();

        setEditor(editor);

        return () => { editor.stop(); };

    }, [ref]);

    return editor;
}
