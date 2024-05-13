
import { Button } from '^/webui/designsystem';

export type Props = {
    onClick: () => void;
};

export default function Component({ onClick }: Props)
{
    return <Button
        type={'primary'}
        text={'Update'}
        onClick={onClick}
    />;
}
