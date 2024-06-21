
import { ReactNode } from 'react';

import { CenteredLayout } from '^/webui/layouts';

type Props = {
    readonly children?: ReactNode;
};

export default function Page({ children }: Props)
{
    return <CenteredLayout>
        {children}
    </CenteredLayout>;
}
