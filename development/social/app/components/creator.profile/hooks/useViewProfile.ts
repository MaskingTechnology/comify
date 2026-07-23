
import { useNavigate } from 'react-router-dom';

import type { Relation } from '^/domain/relation';

export default function useViewProfile()
{
    const navigate = useNavigate();

    return (relation: Relation) => navigate(`/profile/${relation.following.nickname}`);
}
