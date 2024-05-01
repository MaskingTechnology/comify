
import React from 'react';

import { Row } from '^/webui/designsystem/module';

import EditButton from '../../common/EditButton';
import FollowButton from './FollowButton';

export type Props = {
    isFollowing: boolean;
    isSelf: boolean;
    onFollowClick: () => Promise<void>;
    onEditClick?: () => void;
    children: React.ReactNode;
};

export default function Component({ isFollowing, isSelf, onFollowClick, onEditClick, children }: Props)
{
    return <Row alignX='justify' alignY='top'>
        {children}
        {isSelf
            ? onEditClick !== undefined
                ? <EditButton onClick={onEditClick} />
                : <></>
            : <FollowButton isFollowing={isFollowing} onClick={onFollowClick} />
        }
    </Row>;
}
