
import { useCallback } from 'react';

type SubmitHandler = (fullName: string) => Promise<void>;

export default function useFullNameFormHandler(onSubmit: SubmitHandler)
{
    return useCallback((data: FormData) =>
    {
        return onSubmit(data.get('fullName') as string);

    }, [onSubmit]);
}
