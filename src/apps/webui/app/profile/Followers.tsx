
import { useOutletContext } from 'react-router-dom';

import { Followers } from '~/app/relation';

type Props = {
    readonly creatorId?: string;
};

export default function Feature()
{
    const { creatorId } = useOutletContext<Props>();

    return <Followers creatorId={creatorId} />;
}
