
import type { ReactNode } from 'react';

import { Border, Modal } from '^/webui/designsystem';

type Props = {
    readonly open: boolean,
    readonly children?: ReactNode;
};

export default function Component({ open, children }: Props)
{
    return <Modal sizing='full' open={open}>
        <Border type='normal' size='large' padding='small'>
            {children}
        </Border>
    </Modal>;
}
