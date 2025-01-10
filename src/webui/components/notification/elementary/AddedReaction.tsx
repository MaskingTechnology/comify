
import type { AggregatedData as AggregatedNotificationData } from '^/domain/notification/aggregate';
import type { AggregatedData as AggregatedReactionData } from '^/domain/reaction/aggregate';
import { ClickArea, Image, Row, Text } from '^/webui/designsystem';

type Props = {
    readonly notification: AggregatedNotificationData;
    readonly onReactionClick: (reaction: AggregatedReactionData) => void;
};

export default function Component({ notification, onReactionClick }: Props)
{
    return <Row alignX='justify' alignY='stretch' gap='medium'>
        <Text value='I added a reaction to your post.' />
        <ClickArea onClick={() => onReactionClick(notification.reaction as AggregatedReactionData)}>
            <Image source={notification.post?.comic.image.dataUrl as string} width='150px' />
        </ClickArea>
    </Row>;
}
