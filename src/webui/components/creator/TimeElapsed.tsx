
import type CreatorView from '../../../domain/creator/view/CreatorView';
import AvatarRow from './elementary/AvatarRow';
import TimeElapsedColumn from './elementary/TimeElapsedColumn';

export type Props = {
    creator: CreatorView;
    date: Date;
};

export default function Component({ creator, date }: Props)
{
    return <AvatarRow avatarSize='small' avatarUrl={creator.portrait?.dataUrl}>
        <TimeElapsedColumn
            fullName={creator.fullName}
            date={date}
        />
    </AvatarRow>;
}
