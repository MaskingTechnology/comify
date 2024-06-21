
import { ReactNode } from 'react';

export type Props = {
    readonly title: ReactNode;
    readonly children: ReactNode;
};

export default function Component({ children }: Props)
{
    return <div className='ds-tabs-tab'>
        {children}
    </div>;
}
