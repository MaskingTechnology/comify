
import type { AggregatedData as AggregatedCreatorData } from '^/domain/creator/aggregate';

import AvatarRow from './elements/AvatarRow';
import JoinedColumn from './elements/JoinedColumn';

type Props = {
    readonly creator: AggregatedCreatorData;
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
