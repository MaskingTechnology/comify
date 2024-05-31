
import requester from '^/domain/authentication/requester';
import type { AggregatedData as CreatorView } from '^/domain/creator/aggregate/types';
import updateFullName from '^/domain/creator/updateFullName/feature';

import { useAppContext } from '../contexts';

export function useUpdateFullName()
{
    const { setIdentity, identity } = useAppContext();

    return async (fullName: string) => 
    {
        await updateFullName(requester, fullName);

        setIdentity({ ...identity, fullName } as CreatorView);
    };
}
