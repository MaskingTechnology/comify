
import ratedIcon from '^/webui/assets/images/icons/rated.svg';
import unratedIcon from '^/webui/assets/images/icons/unrated.svg';
import { Image } from '^/webui/designsystem/module';

export type Props = {
    isRated: boolean;
};

export default function Component({ isRated }: Props)
{
    return <Image source={isRated ? ratedIcon : unratedIcon} height='18px' />;
}
