
import { Button } from '@maskingtech/designsystem';

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
        type={status === 'unestablished' ? 'secondary' : 'disabled'}
        text={status === 'unestablished' ? 'Follow' : 'Following'}
        onClick={handleClick}
    />;
}
