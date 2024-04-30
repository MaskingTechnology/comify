
import { Button } from '^/webui/designsystem/module';

export type Props = {
    editHandler: () => void;
};

export default function Component({ editHandler }: Props)
{
    return <Button
        type={'secondary'}
        text={'Edit'}
        clickHandler={editHandler}
    />;
}
