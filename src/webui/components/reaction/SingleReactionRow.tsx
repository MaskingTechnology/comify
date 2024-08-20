
import { ClickArea, Row, Text } from '^/webui/designsystem';

type Props = {
    readonly onShowAllClick: () => void;
};

export default function Component({ onShowAllClick }: Props)
{
    return <Row alignY='stretch' alignX='justify' >
        <Text value='single reaction' />
        <ClickArea onClick={onShowAllClick}>
            <Text value='all reactions' />
        </ClickArea>
    </Row>;
}
