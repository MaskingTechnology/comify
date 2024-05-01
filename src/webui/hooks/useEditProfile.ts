
import type RelationView from '^/domain/relation/view/RelationView';

export default function hook()
{
    return (relation: RelationView) =>
    {
        console.log(`Edit profile of: ${relation.following.fullName}`);
    };
}
