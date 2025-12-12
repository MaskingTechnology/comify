
import { Image } from '@maskingtech/designsystem';
import ratedIcon from '^/assets/images/icons/rated.svg';
import unratedIcon from '^/assets/images/icons/unrated.svg';

type Props = {
    readonly isRated: boolean;
};

export default function Component({ isRated }: Props)
{
    return <Image source={isRated ? ratedIcon : unratedIcon} height='1.2em' />;
}
