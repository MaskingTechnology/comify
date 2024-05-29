
import type { AggregatedData as CreatorView } from '^/domain/creator/aggregate/types';

import AvatarRow from './elementary/AvatarRow';
import CountersColumn from './elementary/CountersColumn';

type Props = {
    readonly creator: CreatorView;
    readonly onCreatorClick: (creator: CreatorView) => void;
};

export default function Component({ creator, onCreatorClick }: Props)
{
    return <AvatarRow avatarSize='large' avatarUrl={creator.portrait?.dataUrl}>
        <CountersColumn
            fullName={creator.fullName}
            nickname={creator.nickname}
            onNameClick={() => onCreatorClick(creator)}
            postCount={creator.postCount}
            followerCount={creator.followerCount}
            followingCount={creator.followingCount}
        />
    </AvatarRow>;
}
