
import { AggregatedData as NotificationView } from '^/domain/notification/aggregate/types';
import RatedComicReaction from '../elementary/RatedComicReaction';
import RatedCommentReaction from '../elementary/RatedCommentReaction';

type Props = {
    readonly notification: NotificationView;
    readonly onReactionClick: (notification: NotificationView) => void;
};

export default function Component({ notification, onReactionClick }: Props)
{
    return notification.targetReaction?.comic !== undefined
        ? <RatedComicReaction notification={notification} onReactionClick={onReactionClick} />
        : <RatedCommentReaction notification={notification} onReactionClick={onReactionClick} />;
}
