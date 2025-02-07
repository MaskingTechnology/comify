
import type { AggregatedData as AggregatedPostData } from '^/domain/post/aggregate';

import Comic from './Comic';
import Comment from './Comment';

type Props = {
    readonly post: AggregatedPostData;
    readonly onClick: () => void;
};

const MESSAGE = 'I added a reaction.';

export default function Component({ post, onClick }: Props)
{
    return post.comic !== undefined
        ? <Comic comic={post.comic} message={MESSAGE} onClick={onClick} />
        : <Comment comment={post.comment!} message={MESSAGE} onClick={onClick} />;
}
