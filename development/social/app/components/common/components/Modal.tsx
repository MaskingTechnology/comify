
import type { ReactNode } from 'react';

import { Border, Modal } from '@maskingtech/designsystem';

type Props = {
    readonly children?: ReactNode;
};

export default function ({ children }: Props)
{
    return <Modal>
        <Border type='normal' size='medium' padding='small'>
            {children}
        </Border>
    </Modal>;
}
