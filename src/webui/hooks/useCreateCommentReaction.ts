
import requester from '^/domain/authentication/requester';
import type { AggregatedData as PostView } from '^/domain/post/aggregate/types';
import type { AggregatedData as ReactionView } from '^/domain/reaction/aggregate/types';
import createCommentReaction from '^/domain/reaction/createComment/feature';
import getReaction from '^/domain/reaction/getByIdAggregated/feature';

export function useCreateCommentReaction(post: PostView, handleDone: (reaction?: ReactionView) => void)
{
    return async (imageData: string) =>
    {
        const reactionId = await createCommentReaction(requester, post.id, imageData);
        const reaction = await getReaction(requester, reactionId);

        handleDone(reaction);
    };
}
