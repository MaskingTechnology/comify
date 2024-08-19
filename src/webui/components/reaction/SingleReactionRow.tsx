
import { ClickArea, Row, Text } from '^/webui/designsystem';

type Props = {
    readonly onPostClick: () => void;
};

export default function Component({ onPostClick }: Props)
{
    return <Row alignY='stretch' alignX='justify' >
        <Text value='single reaction' />
        <ClickArea onClick={onPostClick}>
            <Text value='all reactions' />
        </ClickArea>
    </Row>;
}
