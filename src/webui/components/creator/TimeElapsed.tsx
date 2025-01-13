
import type { AggregatedData as AggregatedCreatorData } from '^/domain/creator/aggregate';

import AvatarRow from './elementary/AvatarRow';
import TimeElapsedColumn from './elementary/TimeElapsedColumn';

type Props = {
    readonly creator: AggregatedCreatorData;
    readonly date: string;
    readonly onCreatorClick: (creator: AggregatedCreatorData) => void;
};

export default function Component({ creator, date, onCreatorClick }: Props)
{
    return <AvatarRow avatarSize='medium' avatarUrl={creator.portrait?.dataUrl}>
        <TimeElapsedColumn
            fullName={creator.fullName}
            date={date}
            onNameClick={() => onCreatorClick(creator)}
        />
    </AvatarRow>;
}
