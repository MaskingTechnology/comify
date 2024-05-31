
import requester from '^/domain/authentication/requester';
import type { AggregatedData as RelationView } from '^/domain/relation/aggregate/types';
import establishRelation from '^/domain/relation/establish/feature';

export function useEstablishRelation()
{
    return (relation: RelationView) =>
    {
        return establishRelation(requester, relation.following.id);
    };
}
