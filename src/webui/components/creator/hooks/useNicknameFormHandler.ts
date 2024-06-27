
import { useCallback } from 'react';

export type SubmitHandler = (nickname: string) => Promise<void>;

export default function useNicknameFormHandler(onSubmit: SubmitHandler)
{
    return useCallback((data: FormData) =>
    {
        return onSubmit(data.get('nickname') as string);

    }, [onSubmit]);
}
