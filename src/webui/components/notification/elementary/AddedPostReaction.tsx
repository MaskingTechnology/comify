
import type { AggregatedData as NotificationView } from '^/domain/notification/aggregate/types';
import { ClickArea, Image, Row, Text } from '^/webui/designsystem';

type Props = {
    readonly notification: NotificationView;
    readonly onPostHighlightClick: (notification: NotificationView) => void;
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
