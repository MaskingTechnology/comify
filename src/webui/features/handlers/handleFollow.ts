
import johnDoe from '^/domain/authentication/johnDoe';
import establishRelation from '^/domain/relation/establish';
import type RelationView from '^/domain/relation/view/RelationView';

export default function handleFollow(relation: RelationView): Promise<void>
{
    return establishRelation(johnDoe, relation.creator.id);
}
