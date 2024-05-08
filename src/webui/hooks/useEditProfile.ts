
import type RelationView from '^/domain/relation/view/RelationView';

export function useEditProfile()
{
    return (relation: RelationView) =>
    {
        console.log(`Edit profile of: ${relation.following.fullName}`);
    };
}
