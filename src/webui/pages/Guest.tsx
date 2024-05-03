
import React from 'react';

import { CenteredLayout } from '^/webui/layouts';

type Props = {
    children?: React.ReactNode;
};

export default function Page({ children }: Props)
{
    return <CenteredLayout>
        {children}
    </CenteredLayout>;
}
