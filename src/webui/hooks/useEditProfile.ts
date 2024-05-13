
import type RelationView from '^/domain/relation/view/RelationView';
import { useNavigate } from 'react-router-dom';

export function useEditProfile()
{
    const navigate = useNavigate();

    return (relation: RelationView) =>
    {
        navigate(`/editProfile/${relation.following.nickname}`);
    };
}
