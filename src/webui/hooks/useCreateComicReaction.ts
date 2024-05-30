
import johnDoe from '^/domain/authentication/johnDoe';
import type { AggregatedData as PostView } from '^/domain/post/aggregate/types';
import type { AggregatedData as ReactionView } from '^/domain/reaction/aggregate/types';
import createComicReaction from '^/domain/reaction/createComic/feature';
import getReaction from '^/domain/reaction/getByIdAggregated/feature';

export function useCreateComicReaction(post: PostView, handleDone: (reaction?: ReactionView) => void)
{
    return async (imageData: string) =>
    {
        const reactionId = await createComicReaction(johnDoe, post.id, imageData);
        const reaction = await getReaction(johnDoe, reactionId);

        handleDone(reaction);
    };
}
