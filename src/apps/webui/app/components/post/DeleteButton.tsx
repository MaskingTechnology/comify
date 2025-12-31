
import { ClickArea } from '@maskingtech/designsystem';

import DeleteIcon from './elementary/DeleteIcon';

type Props = {
    readonly onClick: () => void;
};

export default function Component({ onClick }: Props)
{
    return <ClickArea onClick={onClick}>
        <DeleteIcon />
    </ClickArea>;
}
