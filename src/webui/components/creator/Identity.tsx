
import type CreatorView from '../../../domain/creator/view/CreatorView';
import AvatarRow from './elementary/AvatarRow';
import NamesColumn from './elementary/NamesColumn';

export type Props = {
    creator: CreatorView;
};

export default function Component({ creator }: Props)
{
    return <AvatarRow avatarSize='small' avatarUrl={creator.portrait?.dataUrl}>
        <NamesColumn
            fullName={creator.fullName}
            nickname={creator.nickname}
        />
    </AvatarRow>;
}
