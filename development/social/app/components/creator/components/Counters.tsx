
import type { Creator } from '^/domain/creator';

import AvatarRow from './elements/AvatarRow';
import CountersColumn from './elements/CountersColumn';

type Props = {
    readonly creator: Creator;
    readonly onCreatorClick: () => void;
};

export default function Component({ creator, onCreatorClick }: Props)
{
    return <AvatarRow avatarSize='large' avatarUrl={creator.portrait?.dataUrl}>
        <CountersColumn
            fullName={creator.fullName}
            nickname={creator.nickname}
            onNameClick={onCreatorClick}
            postCount={creator.metrics.posts}
            followerCount={creator.metrics.followers}
            followingCount={creator.metrics.following}
        />
    </AvatarRow>;
}
