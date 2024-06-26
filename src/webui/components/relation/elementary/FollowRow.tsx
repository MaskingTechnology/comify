
import { ReactNode } from 'react';

import { Row } from '^/webui/designsystem';

import EditButton from '../../common/EditButton';
import FollowButton from './FollowButton';

type Props = {
    readonly isFollowing: boolean;
    readonly isSelf: boolean;
    readonly onFollowClick: () => Promise<void>;
    readonly onEditClick?: () => void;
    readonly children: ReactNode;
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
