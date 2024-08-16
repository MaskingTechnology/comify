
import { ClickArea, Image, Row, Text } from '^/webui/designsystem';

import type { AggregatedData as ReactionView } from '^/domain/reaction/aggregate/types';

type Props = {
    readonly reaction: ReactionView;
    readonly onReactionClick: (reaction: ReactionView) => void;
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
