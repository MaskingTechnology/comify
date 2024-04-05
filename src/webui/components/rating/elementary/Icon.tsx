

import ratedIcon from '../../../assets/images/icons/rated.svg';
import unratedIcon from '../../../assets/images/icons/unrated.svg';
import { ClickArea, Image } from '../../../designsystem/module';

export type Props = {
    isRated: boolean;
    clickHandler?: () => void;
};

export default function Component({ isRated, clickHandler }: Props)
{
    return <ClickArea clickHandler={clickHandler}>
        <Image source={isRated ? ratedIcon : unratedIcon} height='18px' />
    </ClickArea>;
}
