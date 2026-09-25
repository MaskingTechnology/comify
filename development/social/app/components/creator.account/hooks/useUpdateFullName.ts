
import { useCallback } from 'react';

import { requester } from '@comify/common/security';

import { type Creator } from '^/domain/creator';
import updateFullName from '^/domain/creator/updateFullName';

import { useAppContext } from '~/components/application';

export default function useUpdateFullName()
{
    const { setIdentity, identity } = useAppContext();

    return useCallback(async (fullName: string) => 
    {
        await updateFullName(requester, fullName);

        setIdentity({ ...identity, fullName } as Creator);

    }, [setIdentity, identity]);
}
