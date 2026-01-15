
import { useOutletContext } from 'react-router-dom';

import { CreatorFollowing } from '~/app/relation';

type Props = {
    readonly creatorId?: string;
};

export default function Feature()
{
    const { creatorId } = useOutletContext<Props>();

    return <CreatorFollowing creatorId={creatorId} />;
}
