
import type { AggregatedData as AggregatedNotificationData } from '^/domain/notification/aggregate';
import { Border, ClickArea, Column, Text } from '^/webui/designsystem';

type Props = {
    readonly notification: AggregatedNotificationData;
    readonly onReactionHighlightClick: (notification: AggregatedNotificationData) => void;
};

export default function Component({ notification, onReactionHighlightClick }: Props)
{
    return <Column alignX='stretch' alignY='justify' gap='medium'>
        <Text value='I added a reaction to your reaction.' />
        <ClickArea onClick={() => onReactionHighlightClick(notification)}>
            <Border size='small' padding='small'>
                <Text size='small' wrap='normal' value={notification.targetReaction?.comment?.message as string} />
            </Border>
        </ClickArea>
    </Column>;
}
