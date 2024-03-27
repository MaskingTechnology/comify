
import { useState } from 'react';
import { Button } from '../../../designsystem/module';

export type Props = {
    isFollowing: boolean;
    followHandler: () => Promise<void>;
};

type States = 'establish' | 'establishing' | 'established';

export default function Component({ isFollowing, followHandler }: Props)
{
    const [status, setStatus] = useState<States>('establish');

    const handleClick = async () =>  
    {
        setStatus('establishing');

        await followHandler();

        setStatus('established');
    };

    const state = status === 'established' || isFollowing ? 'disabled' : 'secondary';

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
