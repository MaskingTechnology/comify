
import { Button } from '^/webui/designsystem';

export type Props = {
    onClick?: () => void;
};

export default function Component({ onClick }: Props)
{
    return <Button
        type={'submit'}
        text={'Update'}
        onClick={onClick}
    />;
}
