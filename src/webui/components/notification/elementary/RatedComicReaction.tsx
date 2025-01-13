
import { ClickArea, Image, Row, Text } from '^/webui/designsystem';

import type { AggregatedData as AggregatedNotificationData } from '^/domain/notification/aggregate';

type Props = {
    readonly notification: AggregatedNotificationData;
    readonly onReactionClick: (notification: AggregatedNotificationData) => void;
};

export default function Component({ notification, onReactionClick }: Props)
{
    const dataurl = notification.targetReaction?.comic?.image.dataUrl as string;

    return <Row alignX='justify' alignY='stretch' gap='medium'>
        <Text value='I like your reaction.' />
        <ClickArea onClick={() => onReactionClick(notification)} >
            <Image source={dataurl} width='150px' />
        </ClickArea>
    </Row>;
}
