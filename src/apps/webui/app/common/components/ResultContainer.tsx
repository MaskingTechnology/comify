
import type { ReactNode } from 'react';

import NoResult from './elements/NoResult';

type Props = {
    readonly data: unknown;
    readonly children: ReactNode;
};

export default function Component({ data, children }: Props)
{
    if (data === undefined || data === null) return <NoResult />;

    if (data instanceof Array && data.length === 0) return <NoResult />;

    return children;
}
