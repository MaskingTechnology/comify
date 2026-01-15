
import { useOutletContext } from 'react-router-dom';

import { CreatorFollowers } from '~/app/relation';

type Props = {
    readonly creatorId?: string;
};

export default function Feature()
{
    const { creatorId } = useOutletContext<Props>();

    return <CreatorFollowers creatorId={creatorId} />;
}
