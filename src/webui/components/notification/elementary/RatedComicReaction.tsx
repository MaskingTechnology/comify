
import { ClickArea, Image, Row, Text } from '^/webui/designsystem';

import type { AggregatedData as NotificationView } from '^/domain/notification/aggregate/types';

type Props = {
    readonly notification: NotificationView;
    readonly onReactionClick: (notification: NotificationView) => void;
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
