
import type { AggregatedData as AggregatedCreatorData } from '^/domain/creator/aggregate';

import AvatarRow from './elements/AvatarRow';
import NamesColumn from './elements/NamesColumn';

type Props = {
    readonly creator: AggregatedCreatorData;
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
