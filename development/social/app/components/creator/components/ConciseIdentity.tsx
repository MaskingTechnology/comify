
import { type Creator } from '^/domain/creator';

import Avatar from './elements/Avatar';

type Props = {
    readonly creator: Creator;
};

export default function ({ creator }: Props)
{
    return <Avatar url={creator.portrait?.dataUrl} size='small' />;
}
