
import type CreatorView from '^/domain/creator/view/CreatorView';

import AvatarRow from './elementary/AvatarRow';
import CountersColumn from './elementary/CountersColumn';

export type Props = {
    creator: CreatorView;
    onCreatorClick: (creator: CreatorView) => void;
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
