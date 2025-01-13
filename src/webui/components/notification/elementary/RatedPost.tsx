
import { ClickArea, Image, Row, Text } from '^/webui/designsystem';

import type { AggregatedData as AggregatedPostData } from '^/domain/notification/aggregate';

type Props = {
    readonly notification: AggregatedPostData;
    readonly onPostClick: (notification: AggregatedPostData) => void;
};

export default function Component({ notification, onPostClick }: Props)
{
    const dataurl = notification.targetPost?.comic.image.dataUrl as string;

    return <Row gap='medium' alignX='justify'>
        <Text value='I like your comic.' />
        <ClickArea onClick={() => onPostClick(notification)} >
            <Image source={dataurl} width='150px' />
        </ClickArea>
    </Row>;
}
