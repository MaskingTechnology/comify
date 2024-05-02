
import { ClickArea } from '^/webui/designsystem';
import DeleteIcon from './elementary/DeleteIcon';

export type Props = {
    onClick: () => void;
};

export default function Component({ onClick }: Props)
{
    return <ClickArea onClick={onClick}>
        <DeleteIcon />
    </ClickArea>;
}
