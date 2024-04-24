
import { useState } from 'react';

import { Button } from '^/webui/designsystem/module';

export type Props = {
    isFollowing: boolean;
    followHandler: () => Promise<void>;
};

type States = 'unestablished' | 'establishing' | 'established';

export default function Component({ isFollowing, followHandler }: Props)
{
    const [status, setStatus] = useState<States>(isFollowing ? 'established' : 'unestablished');

    const handleClick = async () =>  
    {
        setStatus('establishing');

        await followHandler();

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
        clickHandler={handleClick}
    />;
}
