
import { useNavigate } from 'react-router-dom';

import type { AggregatedData as AggregatedRelationData } from '^/domain/relation/aggregate';

export default function useViewProfile()
{
    const navigate = useNavigate();

    return (relation: AggregatedRelationData) => navigate(`/profile/${relation.following.nickname}`);
}
