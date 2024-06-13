
import { Border, Modal } from '^/webui/designsystem';

type Props = {
    readonly open: boolean,
    readonly children?: React.ReactNode;
};

export default function Component({ open, children }: Props)
{
    return <Modal open={open}>
        <Border type='normal' size='large' padding='small'>
            {children}
        </Border>
    </Modal>;
}
