
import { AggregatedData as ReactionView } from '^/domain/reaction/aggregate/types';
import { Border, Column, Text } from '^/webui/designsystem';

type Props = {
    readonly reaction: ReactionView;
};

export default function Component({ reaction }: Props)
{

    return <Column alignX='stretch' alignY='justify' gap='medium'>
        <Text value='I like your reaction.' />
        <Border size='small' padding='small'>
            <Text size='small' wrap='normal' value={reaction.comment?.message as string} />
        </Border>
    </Column>;
}
