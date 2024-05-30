
import { useNavigate } from 'react-router-dom';

import type { AggregatedData as RelationView } from '^/domain/relation/aggregate/types';

export function useViewProfile()
{
    const navigate = useNavigate();

    return (relation: RelationView) =>
    {
        navigate(`/profile/${relation.following.nickname}`);
    };
}
