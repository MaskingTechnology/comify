
import { ClickArea } from '^/webui/designsystem';
import Trash from './elementary/Trash';

export type Props = {
    onClick: () => void;
};

export default function Component({ onClick }: Props)
{
    return <ClickArea onClick={onClick}>
        <Trash />
    </ClickArea>;
}
