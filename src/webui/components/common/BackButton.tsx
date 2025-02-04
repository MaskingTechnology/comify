
import { Button } from '^/webui/designsystem';

type Props = {
    readonly onClick: () => void;
};

export default function Component({ onClick }: Props)
{
    return <Button
        type={'secondary'}
        text='Back'
        onClick={onClick}
    />;
}
