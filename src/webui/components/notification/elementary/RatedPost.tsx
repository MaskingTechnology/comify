
import { Image, Row, Text } from '^/webui/designsystem';

export type Props = {
    readonly comicDataUrl: string;
};

export default function Component({ comicDataUrl }: Props)
{
    return <Row gap='medium' alignX='justify'>
        <Text value='I like your comic.' />
        <Image source={comicDataUrl} width='150px' />
    </Row>;
}
