
import type RelationView from '^/domain/relation/view/RelationView';

export default function hook()
{
    const handler = (relation: RelationView) =>
    {
        console.log(`Edit profile of: ${relation.following.fullName}`);
    };

    return handler;
}
