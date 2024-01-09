
import React from 'react';

import { AvatarProps } from '../designsystem/elements/avatar/Avatar.js';
import { Row } from '../designsystem/designsystem.js';
import CreatorNames from './CreatorNames.js';

export type ProfileProps = {
    avatar: React.ReactElement<AvatarProps>;
    username: string;
    nickname: string;
};

export default function Profile(props: ProfileProps)
{
    return <Row>
        {props.avatar}
        <CreatorNames username={props.username} nickname={props.nickname} />
    </Row>;
}
