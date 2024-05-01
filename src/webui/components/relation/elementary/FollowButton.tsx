
import { useState } from 'react';

import { Button } from '^/webui/designsystem/module';

export type Props = {
    isFollowing: boolean;
    onClick: () => Promise<void>;
};

type States = 'unestablished' | 'establishing' | 'established';

export default function Component({ isFollowing, onClick }: Props)
{
    const [status, setStatus] = useState<States>(isFollowing ? 'established' : 'unestablished');

    const handleClick = async () =>  
    {
        setStatus('establishing');

        await onClick();

        setStatus('established');
    };

    const state = status !== 'unestablished' ? 'disabled' : 'secondary';

    let text: string;

    switch (status)
    {
        case 'establishing': text = 'Establishing'; break;
        case 'established': text = 'Following'; break;
        default: text = 'Follow';
    }

    return <Button
        type={state}
        text={text}
        onClick={handleClick}
    />;
}
