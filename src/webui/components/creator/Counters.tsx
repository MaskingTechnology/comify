
import type CreatorView from '../../../domain/creator/view/CreatorView';
import AvatarRow from './elementary/AvatarRow';
import CountersColumn from './elementary/CountersColumn';

export type Props = {
    creator: CreatorView;
};

export default function Component({ creator }: Props)
{
    return <AvatarRow avatarSize='large' avatarUrl={creator.portrait?.dataUrl}>
        <CountersColumn
            fullName={creator.fullName}
            nickname={creator.nickname}
            postCount={creator.postCount}
            followerCount={creator.followerCount}
            followingCount={creator.followingCount}
        />
    </AvatarRow>;
}
