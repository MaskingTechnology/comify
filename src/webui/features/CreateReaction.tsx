
import type PostView from '^/domain/post/view/PostView';
import type ReactionView from '^/domain/reaction/view/ReactionView';

import { ComicEditor, CommentForm } from '^/webui/components';
import { Ruler, Tab, Tabs } from '^/webui/designsystem';
import { useCreateComicReaction, useCreateCommentReaction } from '^/webui/hooks';

type Props = {
    post: PostView;
    handleDone: (reaction?: ReactionView) => void;
};

export default function Feature({ post, handleDone }: Props)
{
    const createComicReaction = useCreateComicReaction(post, handleDone);
    const createCommentReaction = useCreateCommentReaction(post, handleDone);

    return <Tabs separator={<Ruler type='horizontal' size='small' />}>
        <Tab title='Comic'>
            <ComicEditor onCreate={createComicReaction} onCancel={handleDone} />
        </Tab>
        <Tab title='Comment'>
            <CommentForm onCreate={createCommentReaction} onCancel={handleDone} />
        </Tab>
    </Tabs>;
}
