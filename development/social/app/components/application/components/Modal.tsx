
import { Border, Modal } from '@maskingtech/designsystem';
import { type ReactNode } from 'react';

type Props = {
    readonly open: boolean,
    readonly children?: ReactNode;
};

export default function ({ open, children }: Props)
{
    return <Modal sizing='full' open={open}>
        <Border type='normal' size='large' padding='small'>
            {children}
        </Border>
    </Modal>;
}
