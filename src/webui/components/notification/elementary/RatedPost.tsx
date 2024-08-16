
import { ClickArea, Image, Row, Text } from '^/webui/designsystem';

import type { AggregatedData as PostView } from '^/domain/post/aggregate/types';

type Props = {
    readonly post: PostView;
    readonly onComicClick: (post: PostView) => void;
};

export default function Component({ post, onComicClick }: Props)
{
    return <Row gap='medium' alignX='justify'>
        <Text value='I like your comic.' />
        <ClickArea onClick={() => onComicClick(post)} >
            <Image source={post.comic.image.dataUrl} width='150px' />
        </ClickArea>
    </Row>;
}
