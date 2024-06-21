
import { RefObject, useCallback, useEffect, useState } from 'react';

type States = 'pristine' | 'dirty' | 'submitting';
type SubmitHandler = (data: FormData) => Promise<void>;

export function useForm(formRef: RefObject<HTMLFormElement>, submitData: SubmitHandler)
{
    const [formData, setFormData] = useState<FormData>(new FormData());
    const [state, setState] = useState<States>('pristine');

    const updateFormData = useCallback(() =>
    {
        const form = formRef.current;

        if (form === null) return;

        setFormData(new FormData(form));
        setState('pristine');

    }, [formRef]);

    const updateState = useCallback(() =>
    {
        const form = formRef.current;

        if (form === null) return;

        const newFormData = new FormData(form);

        for (const [key, value] of newFormData.entries())
        {
            const originalValue = formData.get(key);

            if (originalValue !== value)
            {
                setState('dirty');

                return;
            }
        }

        setState('pristine');

    }, [formRef, formData]);

    const handleSubmit = useCallback(async () =>
    {
        const form = formRef.current;

        if (form === null) return;

        if (state === 'pristine') return;

        setState('submitting');

        await submitData(new FormData(form));

        updateFormData();

    }, [formRef, state, submitData, updateFormData]);

    const listenForChanges = () =>
    {
        const form = formRef.current;

        if (form === null) return;

        const changeHandler = () => updateState();

        form.addEventListener('input', changeHandler);

        return () => form.removeEventListener('input', changeHandler);
    };

    useEffect(listenForChanges, [formRef, updateState]);

    useEffect(() => updateFormData(), [updateFormData]);

    return [state, handleSubmit] as const;
}
