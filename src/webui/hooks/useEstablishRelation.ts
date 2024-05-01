
import johnDoe from '^/domain/authentication/johnDoe';
import establishRelation from '^/domain/relation/establish';
import type RelationView from '^/domain/relation/view/RelationView';

export default function hook()
{
    return (relation: RelationView) =>
    {
        return establishRelation(johnDoe, relation.following.id);
    };
}
