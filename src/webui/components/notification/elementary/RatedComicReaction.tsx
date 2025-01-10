
import { ClickArea, Image, Row, Text } from '^/webui/designsystem';

import type { AggregatedData as AggregatedReactionData } from '^/domain/reaction/aggregate';

type Props = {
    readonly reaction: AggregatedReactionData;
    readonly onReactionClick: (reaction: AggregatedReactionData) => void;
};

export default function Component({ reaction, onReactionClick }: Props)
{
    return <Row alignX='justify' alignY='stretch' gap='medium'>
        <Text value='I like your reaction.' />
        <ClickArea onClick={() => onReactionClick(reaction)} >
            <Image source={reaction.comic?.image.dataUrl as string} width='150px' />
        </ClickArea>
    </Row>;
}
