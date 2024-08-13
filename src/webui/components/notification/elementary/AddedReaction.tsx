
import type { AggregatedData as PostView } from '^/domain/post/aggregate/types';
import { ClickArea, Image, Row, Text } from '^/webui/designsystem';

type Props = {
    readonly post: PostView;
    readonly onComicClick: (post: PostView) => void;
};

export default function Component({ post, onComicClick }: Props)
{
    return <Row alignX='justify' alignY='stretch' gap='medium'>
        <Text value='I added a reaction to your post.' />
        <ClickArea onClick={() => onComicClick(post)}>
            <Image source={post.comic.image.dataUrl} width='150px' />
        </ClickArea>
    </Row>;
}
