
import type { ReactNode } from 'react';

import NoResult from './elements/NoResult';

type Props = {
    readonly data: unknown;
    readonly isLoading: boolean;
    readonly children: ReactNode;
};

export default function Component({ data, isLoading, children }: Props)
{
    if (isLoading) return children;

    if (data === undefined || data === null) return <NoResult />;

    if (data instanceof Array && data.length === 0) return <NoResult />;

    return children;
}
