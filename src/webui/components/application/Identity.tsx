
import type CreatorView from '../../../domain/creator/view/CreatorView';
import logoutIcon from '../../assets/images/icons/logout.svg';
import { ClickArea, Image, Row } from '../../designsystem/module';
import CreatorIdentity from '../creator/Identity';

export type Props = {
    identity: CreatorView;
    logoutHandler: () => void;
};

export default function Component({ identity, logoutHandler }: Props)
{
    return <Row alignX='justify' alignY='center'>
        <CreatorIdentity creator={identity} />
        <ClickArea clickHandler={() => logoutHandler()}>
            <Image source={logoutIcon} alt='Logout' width='16px' />
        </ClickArea>
    </Row>;
}
