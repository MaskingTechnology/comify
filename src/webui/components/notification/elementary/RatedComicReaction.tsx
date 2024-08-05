
import { Image, Row, Text } from '^/webui/designsystem';

type Props = {
    readonly comicDataUrl: string;
};

export default function Component({ comicDataUrl }: Props)
{
    return <Row alignX='justify' alignY='stretch' gap='medium'>
        <Text value='I like your reaction.' />
        <Image source={comicDataUrl} width='150px' />
    </Row>;
}
