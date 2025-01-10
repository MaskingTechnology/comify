
import { ClickArea, Image, Row, Text } from '^/webui/designsystem';

import type { AggregatedData as AggregatedPostData } from '^/domain/post/aggregate';

type Props = {
    readonly post: AggregatedPostData;
    readonly onPostClick: (post: AggregatedPostData) => void;
};

export default function Component({ post, onPostClick }: Props)
{
    return <Row gap='medium' alignX='justify'>
        <Text value='I like your comic.' />
        <ClickArea onClick={() => onPostClick(post)} >
            <Image source={post.comic.image.dataUrl} width='150px' />
        </ClickArea>
    </Row>;
}
