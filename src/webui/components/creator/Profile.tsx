
import type { AggregatedData as CreatorView } from '^/domain/creator/aggregate/types';

import AvatarRow from './elementary/AvatarRow';
import JoinedColumn from './elementary/JoinedColumn';

type Props = {
    readonly creator: CreatorView;
};

export default function Component({ creator }: Props)
{
    return <AvatarRow avatarSize='large' avatarUrl={creator.portrait?.dataUrl}>
        <JoinedColumn
            fullName={creator.fullName}
            nickname={creator.nickname}
            joinedAt={creator.joinedAt}
        />
    </AvatarRow>;
}
