
import type { Post } from '^/domain/post';

import Comic from './Comic';
import Comment from './Comment';

type Props = {
    readonly post: Post;
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
