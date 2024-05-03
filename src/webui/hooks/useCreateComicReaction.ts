
import johnDoe from '^/domain/authentication/johnDoe';
import type PostView from '^/domain/post/view/PostView';
import createComicReaction from '^/domain/reaction/createComic';
import type ReactionView from '^/domain/reaction/view/ReactionView';

export function useCreateComicReaction(post: PostView, handleDone: (reaction?: ReactionView) => void)
{
    return async (imageData: string) =>
    {
        const reaction = await createComicReaction(johnDoe, post.id, imageData);

        handleDone(reaction);
    };
}
