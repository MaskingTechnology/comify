
import type { AggregatedData as CreatorView } from '^/domain/creator/aggregate/types';

import { Column } from '^/webui/designsystem';

import Menu from './Menu';

type Props = {
    readonly identity: CreatorView;
};

export default function Component({ identity }: Props)
{
    return <Column alignX='stretch' alignY='center'>
        <Menu vertical={false} identity={identity} />
    </Column>;
}
