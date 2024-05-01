
import { Button } from '^/webui/designsystem/module';

export type Props = {
    onClick: () => void;
};

export default function Component({ onClick }: Props)
{
    return <Button
        type={'secondary'}
        text={'Edit'}
        onClick={onClick}
    />;
}
