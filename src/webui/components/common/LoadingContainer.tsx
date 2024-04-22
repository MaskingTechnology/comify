
import React from 'react';
import Spinner from './Spinner';

type Props = {
    data: unknown,
    children: React.ReactNode;
};

export default function Component({ data, children }: Props)
{
    return data !== undefined ? children : <Spinner />;
}
