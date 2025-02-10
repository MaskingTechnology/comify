
import { useCallback } from 'react';

import { requester } from '^/domain/authentication';
import type { AggregatedData as AggregatedCreatorData } from '^/domain/creator/aggregate';
import updateFullName from '^/domain/creator/updateFullName';

import { useAppContext } from '^/webui/contexts';

export default function useUpdateFullName()
{
    const { setIdentity, identity } = useAppContext();

    return useCallback(async (fullName: string) => 
    {
        await updateFullName(requester, fullName);

        setIdentity({ ...identity, fullName } as AggregatedCreatorData);

    }, [setIdentity, identity]);
}
