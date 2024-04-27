
import johnDoe from '^/domain/authentication/johnDoe';
import toggleRating from '^/domain/post/toggleRating';
import type PostView from '^/domain/post/view/PostView';

export default function handleRate(post: PostView): Promise<boolean>
{
    return toggleRating(johnDoe, post.id);
}
