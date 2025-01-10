
import { AggregatedData as ReactionView } from '^/domain/reaction/aggregate/types';
import { Button } from '^/webui/designsystem';

type Props = {
    readonly reaction: ReactionView;
    readonly onClick: (reaction: ReactionView) => void;
    readonly text: string;
};

export default function Component({ reaction, onClick, text }: Props)
{
    return <Button
        type={'secondary'}
        size='small'
        text={text}
        onClick={() => onClick(reaction)}
    />;
}
