
import { Button } from '@maskingtech/designsystem';

type Props = {
    readonly onClick: () => void;
};

export default function Component({ onClick }: Props)
{
    return <Button
        type={'secondary'}
        text={'Edit'}
        onClick={onClick}
    />;
}
