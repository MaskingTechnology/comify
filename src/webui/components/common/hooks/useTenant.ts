
import { useCallback } from 'react';

import { tenant } from '^/domain/tenant';
import getByOriginConverted from '^/domain/tenant/getByOriginConverted';

import { useLoadData } from '^/webui/hooks';

export function useTenant()
{
    const getTenant = useCallback(async () =>
    {
        return await getByOriginConverted(tenant.origin);

    }, []);

    return useLoadData(getTenant, []);
}
