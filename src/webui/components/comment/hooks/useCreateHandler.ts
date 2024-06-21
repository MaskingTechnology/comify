
import { useCallback, useRef, useState } from 'react';

export type CreateHandler = (commentText: string) => Promise<void>;
export type CancelHandler = () => void;

export default function useCreateHandler(onCreate: CreateHandler, onCancel: CancelHandler)
{
    const inputRef = useRef<HTMLTextAreaElement>(null);
    const [creating, setCreating] = useState(false);

    const handleCreate = useCallback(async () =>
    {
        setCreating(true);

        const comment = inputRef.current?.value ?? '';

        await onCreate(comment);

        setCreating(false);

    }, [onCreate, inputRef]);

    const handleCancel = useCallback(() =>
    {
        setCreating(false);

        onCancel();

    }, [onCancel]);

    return [inputRef, creating, handleCreate, handleCancel] as const;
}
