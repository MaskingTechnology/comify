
import { Button } from '^/webui/designsystem/module';

export type Props = {
    editHandler: () => void;
};

export default function Component({ editHandler }: Props)
{
    const handleClick = async () =>  
    {
        editHandler();
    };

    return <Button
        type={'secondary'}
        text={'Edit'}
        clickHandler={handleClick}
    />;
}
