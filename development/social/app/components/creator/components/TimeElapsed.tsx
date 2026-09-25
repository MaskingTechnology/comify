
import { type Creator } from '^/domain/creator';

import AvatarRow from './elements/AvatarRow';
import TimeElapsedColumn from './elements/TimeElapsedColumn';

type Props = {
    readonly creator: Creator;
    readonly date: Date;
    readonly onCreatorClick: () => void;
};

export default function ({ creator, date, onCreatorClick }: Props)
{
    return <AvatarRow avatarSize='medium' avatarUrl={creator.portrait?.dataUrl}>
        <TimeElapsedColumn
            fullName={creator.fullName}
            date={date}
            onNameClick={onCreatorClick}
        />
    </AvatarRow>;
}
