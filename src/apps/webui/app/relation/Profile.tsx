
import type { AggregatedData as AggregatedRelationData } from '^/domain/relation/aggregate';

import { LoadingAndResultContainer } from '~/app/common';

import Profile from './components/Profile';

import useEstablish from './hooks/useEstablish';
import useRelation from './hooks/useRelation';

type Props = {
    readonly creatorId?: string;
    readonly onEdit: () => void;
};

export default function Feature({ creatorId, onEdit }: Props)
{
    const establishRelation = useEstablish();

    const [relation, isLoading] = useRelation(creatorId);

    return <LoadingAndResultContainer data={relation} isLoading={isLoading}>
        <Profile
            relation={relation as AggregatedRelationData}
            onFollowClick={establishRelation}
            onEditClick={onEdit}
        />
    </LoadingAndResultContainer>;
}
