
import type { AggregatedData as NotificationView } from '^/domain/notification/aggregate/types';
import type { AggregatedData as ReactionView } from '^/domain/reaction/aggregate/types';
import { ClickArea, Image, Row, Text } from '^/webui/designsystem';

type Props = {
    readonly notification: NotificationView;
    readonly onReactionClick: (reaction: ReactionView) => void;
};

export default function Component({ notification, onReactionClick }: Props)
{
    return <Row alignX='justify' alignY='stretch' gap='medium'>
        <Text value='I added a reaction to your post.' />
        <ClickArea onClick={() => onReactionClick(notification.reaction as ReactionView)}>
            <Image source={notification.post?.comic.image.dataUrl as string} width='150px' />
        </ClickArea>
    </Row>;
}
