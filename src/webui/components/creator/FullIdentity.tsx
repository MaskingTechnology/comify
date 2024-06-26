
import type { AggregatedData as CreatorView } from '^/domain/creator/aggregate/types';

import AvatarRow from './elementary/AvatarRow';
import NamesColumn from './elementary/NamesColumn';

type Props = {
    readonly creator: CreatorView;
};

export default function Component({ creator }: Props)
{
    return <AvatarRow avatarSize='medium' avatarUrl={creator.portrait?.dataUrl}>
        <NamesColumn
            fullName={creator.fullName}
            nickname={creator.nickname}
        />
    </AvatarRow>;
}
