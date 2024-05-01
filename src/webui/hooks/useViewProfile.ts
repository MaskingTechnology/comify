
import { useNavigate } from 'react-router-dom';

import type RelationView from '^/domain/relation/view/RelationView';

export default function hook()
{
    const navigate = useNavigate();

    return (relation: RelationView) =>
    {
        navigate(`/profile/${relation.following.nickname}`);
    };
}
