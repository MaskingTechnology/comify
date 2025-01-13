
import { Border, ClickArea, Column, Text } from '^/webui/designsystem';

import type { AggregatedData as AggregatedNotificationData } from '^/domain/notification/aggregate';

type Props = {
    readonly notification: AggregatedNotificationData;
    readonly onReactionClick: (notification: AggregatedNotificationData) => void;
};

export default function Component({ notification, onReactionClick }: Props)
{
    return <Column alignX='stretch' alignY='justify' gap='medium'>
        <Text value='I like your reaction.' />
        <ClickArea onClick={() => onReactionClick(notification)} >
            <Border size='small' padding='small'>
                <Text size='small' wrap='normal' value={notification.targetReaction?.comment?.message as string} />
            </Border>
        </ClickArea>
    </Column>;
}
