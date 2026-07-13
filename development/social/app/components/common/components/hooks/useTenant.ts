
import { useCallback } from 'react';

import { useLoadData } from '@maskingtech/react-toolkit';

import { tenant } from '@comify/common/domain/tenant';
import getByOrigin from '@comify/common/domain/tenant/getByOrigin';

export function useTenant()
{
    const getTenant = useCallback(async () =>
    {
        return await getByOrigin(tenant.origin);

    }, []);

    return useLoadData(getTenant, []);
}
