
import type { AggregatedData as AggregatedCreatorData } from '^/domain/creator/aggregate';

import { Column } from '^/webui/designsystem';

import Menu from './Menu';

type Props = {
    readonly identity: AggregatedCreatorData;
};

export default function Component({ identity }: Props)
{
    return <Column alignX='stretch' alignY='center'>
        <Menu vertical={false} identity={identity} />
    </Column>;
}
