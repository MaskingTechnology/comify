
import { Row } from '@maskingtech/designsystem';

import type { AggregatedData as AggregatedCreatorData } from '^/domain/creator/aggregate';

import { FullIdentity } from '~/app/creator';
import LogoutButton from './LogoutButton';

type Props = {
    readonly identity: AggregatedCreatorData;
    readonly onLogout: () => void;
};

export default function Component({ identity, onLogout }: Props)
{
    return <Row alignX='justify' alignY='center'>
        <FullIdentity creator={identity} />
        <LogoutButton onLogout={onLogout} />
    </Row>;
}
