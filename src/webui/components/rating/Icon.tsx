
import React from 'react';

import { Image } from '../../designsystem/module';

import unratedIcon from '../../../assets/images/icons/unrated.svg';
import ratedIcon from '../../../assets/images/icons/rated.svg';

export type Props = {
    isRated: boolean;
};


export default function Component({ isRated }: Props)
{
    return <Image source={isRated ? ratedIcon : unratedIcon} height='18px' />;
}
