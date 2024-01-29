
import React from 'react';

import { Image, Row } from '../../../designsystem/module';

import CompactNumber from '../../common/CompactNumber';

import unratedIcon from '../../../../assets/images/icons/unrated.svg';
import ratedIcon from '../../../../assets/images/icons/rated.svg';
import reactionsIcon from '../../../../assets/images/icons/reactions.svg';

export type Props = {
    isRated: boolean;
    ratingCount: number;
    reactionCount: number;
    rateHandler?: () => void;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function Component({ isRated, ratingCount, reactionCount, rateHandler }: Props)
{
    return <Row gap='medium' alignY='center'>
        <Row gap='small' alignY='center'>
            <Image source={isRated ? ratedIcon : unratedIcon} height='16px' />
            <CompactNumber value={ratingCount} />
        </Row>
        <Row gap='small' alignY='center'>
            <Image source={reactionsIcon} height='16px' />
            <CompactNumber value={reactionCount} />
        </Row>
    </Row>;
}
