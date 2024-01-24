
import React from 'react';

import type CreatorView from '../../../../domain/creator/CreatorView';

import { Row, Avatar, AvatarProps } from '../../../designsystem/module';

export type Props = {
    avatarSize: AvatarProps['size'];
    creator: CreatorView;
    children: React.ReactNode;
};

export default function Component(props: Props)
{
    const gapSize = props.avatarSize === 'small' ? 'small' : 'medium';

    return <Row gap={gapSize}>
        <Avatar size={props.avatarSize} source={props.creator.portrait.dataUrl} />
        {props.children}
    </Row>;
}
