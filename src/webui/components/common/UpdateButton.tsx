
import { Button } from '^/webui/designsystem';

export type Props = {
    state: string;
    readonly onClick?: () => void;
};

export default function Component({ state }: Props)
{
    const status = state === 'enabled' ? 'submit' : 'disabled';
    const text = state === 'submitting' ? 'Updating' : 'Update';

    return <Button
        type={status}
        text={text}
    />;
}
