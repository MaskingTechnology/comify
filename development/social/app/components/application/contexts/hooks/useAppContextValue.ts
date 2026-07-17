
import { useMemo, useState } from 'react';

import type { Creator } from '^/domain/creator';

export default function useAppContextValue(initialIdentity?: Creator)
{
    const [identity, setIdentity] = useState<Creator | undefined>(initialIdentity);
    const appState = useMemo<Map<string, unknown>>(() => new Map(), []);

    return useMemo(() => (
        {
            identity,
            setIdentity,
            appState
        }
    ), [identity, appState]);
}
