
import { AggregatedData as ReactionView } from '^/domain/reaction/aggregate/types';
import RatedComicReaction from '../elementary/RatedComicReaction';
import RatedCommentReaction from '../elementary/RatedCommentReaction';

type Props = {
    readonly reaction: ReactionView;
    readonly onReactionClick: (reaction: ReactionView) => void;
};

export default function Component({ reaction, onReactionClick }: Props)
{
    return reaction.comic !== undefined
        ? <RatedComicReaction reaction={reaction} onReactionClick={onReactionClick} />
        : <RatedCommentReaction reaction={reaction} onReactionClick={onReactionClick} />;
}
