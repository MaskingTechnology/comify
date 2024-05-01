
import React from 'react';

import { CenteredLayout } from '^/webui/layouts';

export type Props = {
    children?: React.ReactNode;
};

export default function Page({ children }: Props)
{
    return <CenteredLayout>
        {children}
    </CenteredLayout>;
}
