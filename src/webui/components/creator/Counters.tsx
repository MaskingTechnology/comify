
import type { AggregatedData as AggregatedCreatorData } from '^/domain/creator/aggregate';

import AvatarRow from './elementary/AvatarRow';
import CountersColumn from './elementary/CountersColumn';

type Props = {
    readonly creator: AggregatedCreatorData;
    readonly onCreatorClick: (creator: AggregatedCreatorData) => void;
};

export default function Component({ creator, onCreatorClick }: Props)
{
    return <AvatarRow avatarSize='large' avatarUrl={creator.portrait?.dataUrl}>
        <CountersColumn
            fullName={creator.fullName}
            nickname={creator.nickname}
            onNameClick={() => onCreatorClick(creator)}
            postCount={creator.metrics.posts}
            followerCount={creator.metrics.followers}
            followingCount={creator.metrics.following}
        />
    </AvatarRow>;
}
