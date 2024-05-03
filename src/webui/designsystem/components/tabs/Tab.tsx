
import React from 'react';

export type Props = {
    readonly title: React.ReactNode;
    readonly children: React.ReactNode;
};

export default function Component({ children }: Props)
{
    return <div className='ds-tabs-tab'>
        {children}
    </div>;
}
