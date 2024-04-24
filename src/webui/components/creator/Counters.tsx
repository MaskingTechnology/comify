
import type CreatorView from '^/domain/creator/view/CreatorView';

import AvatarRow from './elementary/AvatarRow';
import CountersColumn from './elementary/CountersColumn';

export type Props = {
    creator: CreatorView;
    profileHandler: () => void;
};

export default function Component({ creator, profileHandler }: Props)
{
    return <AvatarRow avatarSize='large' avatarUrl={creator.portrait?.dataUrl}>
        <CountersColumn
            fullName={creator.fullName}
            nickname={creator.nickname}
            profileHandler={profileHandler}
            postCount={creator.postCount}
            followerCount={creator.followerCount}
            followingCount={creator.followingCount}
        />
    </AvatarRow>;
}
