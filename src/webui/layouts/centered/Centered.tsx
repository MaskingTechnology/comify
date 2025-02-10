
import { ReactNode } from 'react';

import './Centered.css';

type Props = {
    readonly children?: ReactNode;
};

export default function Layout({ children }: Props)
{
    return <main className='ds centered-layout'>
        <div className='content'>
            {children}
        </div>
    </main>;
}
