
import type { AggregatedData as AggregatedNotificationData } from '^/domain/notification/aggregate';
import { ClickArea, Image, Row, Text } from '^/webui/designsystem';

type Props = {
    readonly notification: AggregatedNotificationData;
    readonly onPostHighlightClick: (notification: AggregatedNotificationData) => void;
};

export default function Component({ notification, onPostHighlightClick }: Props)
{
    return <Row alignX='justify' alignY='stretch' gap='medium'>
        <Text value='I added a reaction to your post.' />
        <ClickArea onClick={() => onPostHighlightClick(notification)}>
            <Image source={notification.targetPost?.comic.image.dataUrl as string} width='150px' />
        </ClickArea>
    </Row>;
}
