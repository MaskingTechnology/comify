
import { ClickArea, Icon } from '^/webui/designsystem/module';

export type Props = {
    deleteHandler: () => void;
};

export default function Component({ deleteHandler }: Props)
{
    return <ClickArea clickHandler={deleteHandler}>
        <Icon type='trash' />
    </ClickArea>;
}
