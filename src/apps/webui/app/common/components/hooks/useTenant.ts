
import { useCallback } from 'react';

import { useLoadData } from '@maskingtech/react-toolkit';

import { tenant } from '^/domain/tenant';
import getByOriginConverted from '^/domain/tenant/getByOriginConverted';

export function useTenant()
{
    const getTenant = useCallback(async () =>
    {
        return await getByOriginConverted(tenant.origin);

    }, []);

    return useLoadData(getTenant, []);
}
