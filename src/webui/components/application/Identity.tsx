
import type CreatorView from '^/domain/creator/view/CreatorView';

import logoutIcon from '^/webui/assets/images/icons/logout.svg';
import { ClickArea, Image, Row } from '^/webui/designsystem';

import CreatorIdentity from '../creator/Identity';

type Props = {
    readonly identity: CreatorView;
    readonly onLogout: () => void;
};

export default function Component({ identity, onLogout }: Props)
{
    return <Row alignX='justify' alignY='center'>
        <CreatorIdentity creator={identity} />
        <ClickArea onClick={() => onLogout()}>
            <Image source={logoutIcon} alt='Logout' width='16px' />
        </ClickArea>
    </Row>;
}
