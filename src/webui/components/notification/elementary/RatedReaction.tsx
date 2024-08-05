
import { AggregatedData as ReactionView } from '^/domain/reaction/aggregate/types';
import RatedComicReaction from '../elementary/RatedComicReaction';
import RatedCommentReaction from '../elementary/RatedCommentReaction';

type Props = {
    readonly reaction: ReactionView;
};

export default function Component({ reaction }: Props)
{
    return reaction.comic !== undefined
        ? RatedComicReaction({ reaction })
        : RatedCommentReaction({ reaction });
}
