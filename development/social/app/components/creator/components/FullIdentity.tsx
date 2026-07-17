
import type { Creator } from '^/domain/creator';

import AvatarRow from './elements/AvatarRow';
import NamesColumn from './elements/NamesColumn';

type Props = {
    readonly creator: Creator;
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
