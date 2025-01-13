
import { AggregatedData as AggregatedReactionData } from '^/domain/notification/aggregate';
import RatedComicReaction from '../elementary/RatedComicReaction';
import RatedCommentReaction from '../elementary/RatedCommentReaction';

type Props = {
    readonly notification: AggregatedReactionData;
    readonly onReactionClick: (notification: AggregatedReactionData) => void;
};

export default function Component({ notification, onReactionClick }: Props)
{
    return notification.targetReaction?.comic !== undefined
        ? <RatedComicReaction notification={notification} onReactionClick={onReactionClick} />
        : <RatedCommentReaction notification={notification} onReactionClick={onReactionClick} />;
}
