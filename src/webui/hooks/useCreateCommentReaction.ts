
import johnDoe from '^/domain/authentication/johnDoe';
import type PostView from '^/domain/post/view/PostView';
import createCommentReaction from '^/domain/reaction/createComment';
import type ReactionView from '^/domain/reaction/view/ReactionView';

export function useCreateCommentReaction(post: PostView, handleDone: (reaction?: ReactionView) => void)
{
    return async (imageData: string) =>
    {
        const reaction = await createCommentReaction(johnDoe, post.id, imageData);

        handleDone(reaction);
    };
}
