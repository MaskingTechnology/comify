
import { useCallback } from 'react';

import requester from '^/domain/authentication/requester';
import type { AggregatedData as CreatorView } from '^/domain/creator/aggregate/types';
import updateFullName from '^/domain/creator/updateFullName/feature';

import { useAppContext } from '^/webui/contexts';

export default function useUpdateFullName()
{
    const { setIdentity, identity } = useAppContext();

    return useCallback(async (fullName: string) => 
    {
        await updateFullName(requester, fullName);

        setIdentity({ ...identity, fullName } as CreatorView);

    }, [setIdentity, identity]);
}
