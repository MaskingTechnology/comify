
import type { AggregatedData as AggregatedPostData } from '^/domain/post/aggregate';

import Comic from './Comic';
import Comment from './Comment';

type Props = {
    readonly post: AggregatedPostData;
    readonly onClick: () => void;
};

const COMIC_MESSAGE = 'I like your comic.';
const COMMENT_MESSAGE = 'I like your comment.';

export default function Component({ post, onClick }: Props)
{
    return post.comic !== undefined
        ? <Comic comic={post.comic} message={COMIC_MESSAGE} onClick={onClick} />
        : <Comment comment={post.comment!} message={COMMENT_MESSAGE} onClick={onClick} />;
}
