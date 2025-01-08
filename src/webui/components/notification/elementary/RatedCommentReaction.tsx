
import { Border, ClickArea, Column, Text } from '^/webui/designsystem';

import type { AggregatedData as AggregatedReactionData } from '^/domain/reaction/aggregate';

type Props = {
    readonly reaction: AggregatedReactionData;
    readonly onReactionClick: (reaction: AggregatedReactionData) => void;
};

export default function Component({ reaction, onReactionClick }: Props)
{
    return <Column alignX='stretch' alignY='justify' gap='medium'>
        <Text value='I like your reaction.' />
        <ClickArea onClick={() => onReactionClick(reaction)} >
            <Border size='small' padding='small'>
                <Text size='small' wrap='normal' value={reaction.comment?.message as string} />
            </Border>
        </ClickArea>
    </Column>;
}
