
import { useOutletContext } from 'react-router-dom';

import { Following } from '~/app/relation';

type Props = {
    readonly creatorId?: string;
};

export default function Feature()
{
    const { creatorId } = useOutletContext<Props>();

    return <Following creatorId={creatorId} />;
}
