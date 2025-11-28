
import { useCallback, useState } from 'react';

import type { Editor } from '^/webui/editor';

export type CreateHandler = (imageData: string) => Promise<void>;
export type CancelHandler = () => void;

export default function useCreateHandler(editor: Editor | undefined, onCreate: CreateHandler, onCancel?: CancelHandler)
{
    const [creating, setCreating] = useState(false);

    const handleCreate = useCallback(async () =>
    {
        if (editor === undefined) return;

        const imageData = editor.export();

        setCreating(true);

        await onCreate(imageData);

        setCreating(false);

    }, [editor, onCreate]);

    const handleCancel = useCallback(() =>
    {
        if (onCancel === undefined) return;

        setCreating(false);

        onCancel();

    }, [onCancel]);

    return [creating, handleCreate, handleCancel] as const;
}
