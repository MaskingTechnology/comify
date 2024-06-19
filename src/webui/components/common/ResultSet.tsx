
import React from 'react';
import NoResults from './NoResults';

type Props = {
    data: unknown[],
    isLoading: boolean,
    children: React.ReactNode;
};

export default function Component({ data, isLoading, children }: Props)
{
    const hasData = isLoading === false && data.length === 0;

    return hasData ? <NoResults /> : children;
}
