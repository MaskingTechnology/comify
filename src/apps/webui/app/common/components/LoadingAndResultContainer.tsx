
import type { ReactNode } from 'react';

import LoadingContainer from './LoadingContainer';
import ResultContainer from './ResultContainer';

type Props = {
    readonly data: unknown;
    readonly isLoading: boolean;
    readonly children: ReactNode;
};

export default function Component({ data, isLoading, children }: Props)
{
    return <LoadingContainer isLoading={isLoading}>
        <ResultContainer data={data}>
            {children}
        </ResultContainer>
    </LoadingContainer>;
}
