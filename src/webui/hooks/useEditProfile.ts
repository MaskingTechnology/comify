
import type { AggregatedData as RelationView } from '^/domain/relation/aggregate/types';

export function useEditProfile()
{
    return (relation: RelationView) =>
    {
        console.log(`Edit profile of: ${relation.following.fullName}`);
    };
}
