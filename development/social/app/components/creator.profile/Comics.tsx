
import { useOutletContext } from 'react-router-dom';

import { Creator } from '~/components/post';

type Props = {
    readonly creatorId: string;
};

export default function ()
{
    const { creatorId } = useOutletContext<Props>();

    return <Creator creatorId={creatorId} />;
}
