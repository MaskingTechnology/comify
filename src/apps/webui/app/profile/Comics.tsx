
import { useOutletContext } from 'react-router-dom';

import { CreatorComics } from '~/app/post';

type Props = {
    readonly creatorId: string;
};

export default function Feature()
{
    const { creatorId } = useOutletContext<Props>();

    return <CreatorComics creatorId={creatorId} />;
}
