
import { Row } from '@maskingtech/designsystem';

import type { Creator } from '^/domain/creator';

import { ConciseIdentity } from '~/components/creator';

import Logo from './Logo';
import LogoutButton from './LogoutButton';

type Props = {
    readonly identity: Creator;
    readonly onLogout: () => void;
};

export default function ({ identity, onLogout }: Props)
{
    return <Row alignX='justify' alignY='center'>
        <Logo size='small' />
        <Row gap='small' alignY='center'>
            <ConciseIdentity creator={identity} />
            <LogoutButton onLogout={onLogout} />
        </Row>
    </Row>;
}
