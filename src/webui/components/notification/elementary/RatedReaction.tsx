
import { AggregatedData as AggregatedReactionData } from '^/domain/reaction/aggregate';
import RatedComicReaction from '../elementary/RatedComicReaction';
import RatedCommentReaction from '../elementary/RatedCommentReaction';

type Props = {
    readonly reaction: AggregatedReactionData;
    readonly onReactionClick: (reaction: AggregatedReactionData) => void;
};

export default function Component({ reaction, onReactionClick }: Props)
{
    return reaction.comic !== undefined
        ? <RatedComicReaction reaction={reaction} onReactionClick={onReactionClick} />
        : <RatedCommentReaction reaction={reaction} onReactionClick={onReactionClick} />;
}
