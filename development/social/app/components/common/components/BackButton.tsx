
import { Button } from '@maskingtech/designsystem';

type Props = {
    readonly onClick: () => void;
};

export default function ({ onClick }: Props)
{
    return <Button
        type={'secondary'}
        text='Back'
        onClick={onClick}
    />;
}
