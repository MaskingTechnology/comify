
import johnDoe from '^/domain/authentication/johnDoe';
import type PostView from '^/domain/post/view/PostView';
import createComicReaction from '^/domain/reaction/createComic';
import type ReactionView from '^/domain/reaction/view/ReactionView';

export default function hook(post: PostView, handleDone: (reaction?: ReactionView) => void)
{
    const handler = async (imageData: string) =>
    {
        const reaction = await createComicReaction(johnDoe, post.id, imageData);

        handleDone(reaction);
    };

    return handler;
}
