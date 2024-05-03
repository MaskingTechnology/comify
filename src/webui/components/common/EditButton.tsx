
import { Button } from '^/webui/designsystem';

export type Props = {
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
