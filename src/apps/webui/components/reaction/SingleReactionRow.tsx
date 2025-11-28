
import { ClickArea, Row, Text } from '^/webui/designsystem';

type Props = {
    readonly onShowClick: () => void;
};

export default function Component({ onShowClick }: Props)
{
    return <Row alignY='stretch' alignX='justify' >
        <Text value='single reaction' />
        <ClickArea onClick={onShowClick}>
            <Text value='all reactions' />
        </ClickArea>
    </Row>;
}
