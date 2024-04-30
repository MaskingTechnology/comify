
import type PostView from '^/domain/post/view/PostView';
import type ReactionView from '^/domain/reaction/view/ReactionView';

import { ComicEditor, CommentForm } from '^/webui/components/module';
import { Ruler, Tab, Tabs } from '^/webui/designsystem/module';
import { useCreateComicReaction, useCreateCommentReaction } from '^/webui/hooks/module';

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
            <ComicEditor createHandler={createComicReaction} cancelHandler={handleDone} />
        </Tab>
        <Tab title='Comment'>
            <CommentForm createHandler={createCommentReaction} cancelHandler={handleDone} />
        </Tab>
    </Tabs>;
}
