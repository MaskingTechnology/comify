
import type { AggregatedData as PostView } from '^/domain/post/aggregate/types';
import toggleRating from '^/domain/post/toggleRating/feature';

export function useTogglePostRating()
{
    return (post: PostView) =>
    {
        return toggleRating(requester, post.id);
    };
}
