
import React from 'react';
import { CenteredLayout } from '../layouts/module';

export type Props = {
    children?: React.ReactNode;
};

export default function Page({ children }: Props)
{
    return <CenteredLayout>
        {children}
    </CenteredLayout>;
}
