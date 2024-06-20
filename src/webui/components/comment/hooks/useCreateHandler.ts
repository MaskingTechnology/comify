
import { RefObject, useCallback, useState } from 'react';

export type CreateHandler = (commentText: string) => Promise<void>;
export type CancelHandler = () => void;

export default function useCreateHandler(ref: RefObject<HTMLTextAreaElement>, onCreate: CreateHandler, onCancel: CancelHandler)
{
    const [creating, setCreating] = useState(false);

    const handleCreate = useCallback(async () =>
    {
        setCreating(true);

        const comment = ref.current?.value ?? '';

        await onCreate(comment);

        setCreating(false);

    }, [onCreate, ref]);

    const handleCancel = useCallback(() =>
    {
        setCreating(false);

        onCancel();

    }, [onCancel]);

    return [creating, handleCreate, handleCancel] as const;
}
