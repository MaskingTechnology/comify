
import { Button } from '^/webui/designsystem';

import type { EstablishHandler } from '../hooks/useEstablish';
import useEstablish from '../hooks/useEstablish';

type Props = {
    readonly isFollowing: boolean;
    readonly onClick: EstablishHandler;
};

export default function Component({ isFollowing, onClick }: Props)
{
    const [status, handleClick] = useEstablish(isFollowing, onClick);

    return <Button
        type={status !== 'unestablished' ? 'disabled' : 'secondary'}
        text={status !== 'unestablished' ? 'Following' : 'Follow'}
        onClick={handleClick}
    />;
}
