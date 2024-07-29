
import { AggregatedData as ReactionView } from '^/domain/reaction/aggregate/types';
import { Image, Row, Text } from '^/webui/designsystem';

type Props = {
    readonly reaction: ReactionView;
};

export default function Component({ reaction }: Props)
{
    return <Row gap='medium' alignX="justify">
        <Text value='I like your reaction.' />
        {
            reaction.comic
                ? <Image source={reaction.comic.image.dataUrl} width='150px' />
                : <Text value={reaction.comment?.message as string} />
        }
    </Row>;
}
