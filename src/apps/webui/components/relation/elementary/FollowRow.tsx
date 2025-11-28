
import type { ReactNode } from 'react';

import { Row } from '@maskingtech/designsystem';

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
            // eslint-disable-next-line sonarjs/no-nested-conditional
            ? onEditClick !== undefined
                ? <EditButton onClick={onEditClick} />
                : <></>
            : <FollowButton isFollowing={isFollowing} onClick={onFollowClick} />
        }
    </Row>;
}
