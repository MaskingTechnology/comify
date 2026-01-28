
import { useOutletContext } from 'react-router-dom';

import { Creator } from '~/app/post';

type Props = {
    readonly creatorId: string;
};

export default function Feature()
{
    const { creatorId } = useOutletContext<Props>();

    return <Creator creatorId={creatorId} />;
}
