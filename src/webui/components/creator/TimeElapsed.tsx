
import type { AggregatedData as CreatorView } from '^/domain/creator/aggregate/types';

import AvatarRow from './elementary/AvatarRow';
import TimeElapsedColumn from './elementary/TimeElapsedColumn';

type Props = {
    readonly creator: CreatorView;
    readonly date: Date;
    readonly onCreatorClick: (creator: CreatorView) => void;
};

export default function Component({ creator, date, onCreatorClick }: Props)
{
    return <AvatarRow avatarSize='small' avatarUrl={creator.portrait?.dataUrl}>
        <TimeElapsedColumn
            fullName={creator.fullName}
            date={date}
            onNameClick={() => onCreatorClick(creator)}
        />
    </AvatarRow>;
}
