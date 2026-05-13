
import type { ReactNode } from 'react';

import LoadingIndicator from './elements/LoadingIndicator';

type Props = {
    readonly isLoading: boolean;
    readonly children: ReactNode;
};

export default function Component({ isLoading, children }: Props)
{
    if (isLoading) return <LoadingIndicator />;

    return children;
}
