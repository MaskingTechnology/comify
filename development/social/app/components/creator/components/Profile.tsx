
import type { Creator } from '^/domain/creator';

import AvatarRow from './elements/AvatarRow';
import JoinedColumn from './elements/JoinedColumn';

type Props = {
    readonly creator: Creator;
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
