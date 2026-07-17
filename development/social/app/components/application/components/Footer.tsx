
import { Column } from '@maskingtech/designsystem';

import type { Creator } from '^/domain/creator';

import Menu from './Menu';

type Props = {
    readonly identity: Creator;
};

export default function Component({ identity }: Props)
{
    return <Column alignX='stretch' alignY='center'>
        <Menu vertical={false} identity={identity} />
    </Column>;
}
