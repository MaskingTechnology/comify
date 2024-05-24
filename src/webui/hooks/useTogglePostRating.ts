
import johnDoe from '^/domain/authentication/johnDoe';
import toggleRating from '^/domain/post/toggleRating/feature';
import type PostView from '^/domain/post/view/PostView';

export function useTogglePostRating()
{
    return (post: PostView) =>
    {
        return toggleRating(johnDoe, post.id);
    };
}
