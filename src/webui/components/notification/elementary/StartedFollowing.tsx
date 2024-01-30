
import React from 'react';

import { Paragraph, Text } from '../../../designsystem/module';

export type Props = {
    isFollowing: boolean;
};

export default function Component({ isFollowing }: Props)
{
    const message = 'I started following you.'
        + (isFollowing ? '' : 'Hit the Follow button to follow me back.');

    return <Paragraph>
        <Text value={message} />
    </Paragraph>;
}
