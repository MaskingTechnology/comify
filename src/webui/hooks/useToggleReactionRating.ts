
import johnDoe from '^/domain/authentication/johnDoe';
import toggleRating from '^/domain/reaction/toggleRating';
import type ReactionView from '^/domain/reaction/view/ReactionView';

export default function hook()
{
    return (reaction: ReactionView) =>
    {
        return toggleRating(johnDoe, reaction.id);
    };
}
