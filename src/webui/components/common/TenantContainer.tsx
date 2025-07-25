
import { useEffect, type ReactNode } from 'react';

import { useTenant } from './hooks/useTenant';

type Props = {
    children: ReactNode;
};

export default function Component({ children }: Props)
{
    const [tenant] = useTenant();

    useEffect(() =>
    {
        if (tenant === undefined) return;

        const link = document.createElement('link');
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('href', `/assets/${tenant.id}.css`);

        document.head.appendChild(link);

    }, [tenant]);

    if (tenant === undefined) return null;

    return children;
}
