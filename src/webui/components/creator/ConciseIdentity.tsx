
import type { AggregatedData as AggregatedCreatorData } from '^/domain/creator/aggregate';

import Avatar from './elementary/Avatar';

type Props = {
    readonly creator: AggregatedCreatorData;
};

export default function Component({ creator }: Props)
{
    return <Avatar url={creator.portrait?.dataUrl} size='small' />;
}
