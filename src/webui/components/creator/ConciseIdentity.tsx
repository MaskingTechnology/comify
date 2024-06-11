
import type { AggregatedData as CreatorView } from '^/domain/creator/aggregate/types';

import Avatar from './elementary/Avatar';

type Props = {
    readonly creator: CreatorView;
};

export default function Component({ creator }: Props)
{
    return <Avatar url={creator.portrait?.dataUrl} size='small' />;
}
