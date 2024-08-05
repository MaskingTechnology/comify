
import { AggregatedData as ReactionView } from '^/domain/reaction/aggregate/types';
import { Image, Row, Text } from '^/webui/designsystem';

type Props = {
    readonly reaction: ReactionView;
};

export default function Component({ reaction }: Props)
{
    return <Row alignX='justify' alignY='stretch' gap='medium'>
        <Text value='I like your reaction.' />
        <Image source={reaction.comic?.image.dataUrl as string} width='150px' />
    </Row>;
}
