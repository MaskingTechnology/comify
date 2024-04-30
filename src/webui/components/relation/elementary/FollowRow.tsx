
import React from 'react';

import { Row } from '^/webui/designsystem/module';

import EditButton from '../../common/EditButton';
import FollowButton from './FollowButton';

export type Props = {
    isFollowing: boolean;
    isSelf: boolean;
    followHandler: () => Promise<void>;
    editHandler?: () => void;
    children: React.ReactNode;
};

export default function Component({ isFollowing, isSelf, followHandler, editHandler, children }: Props)
{
    return <Row alignX='justify' alignY='top'>

        {children}

        {isSelf
            ? editHandler !== undefined
                ? <EditButton editHandler={editHandler} />
                : <></>
            : <FollowButton isFollowing={isFollowing} followHandler={followHandler} />
        }

    </Row>;
}
