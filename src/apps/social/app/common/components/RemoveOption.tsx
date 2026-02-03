
import { ClickArea, Icon } from '@maskingtech/designsystem';

type Props = {
    readonly onClick: () => void;
};

export default function Component({ onClick }: Props)
{
    return <ClickArea padding='none' onClick={onClick}>
        <Icon type='trash' />
    </ClickArea>;
}
