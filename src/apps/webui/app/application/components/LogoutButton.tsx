
import { ClickArea, Image } from '@maskingtech/designsystem';

import logoutIcon from '~/assets/images/icons/logout.svg';

type Props = {
    readonly onLogout: () => void;
};

export default function Component({ onLogout }: Props)
{
    return <ClickArea onClick={() => onLogout()}>
        <Image source={logoutIcon} alt='Logout' width='1em' />
    </ClickArea>;
}
