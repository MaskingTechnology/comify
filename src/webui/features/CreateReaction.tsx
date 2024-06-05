
import type { AggregatedData as PostView } from '^/domain/post/aggregate/types';
import type { AggregatedData as ReactionView } from '^/domain/reaction/aggregate/types';

import { ComicEditor, CommentForm } from '^/webui/components';
import { Ruler, Tab, Tabs } from '^/webui/designsystem';
import { useCreateComicReaction, useCreateCommentReaction } from '^/webui/hooks';

type Props = {
    readonly post: PostView;
    readonly handleDone: (reaction?: ReactionView) => void;
};

const MESSAGE_MAX_LENGTH = 1000;

export default function Feature({ post, handleDone }: Props)
{
    const createComicReaction = useCreateComicReaction(post, handleDone);
    const createCommentReaction = useCreateCommentReaction(post, handleDone);

    return <Tabs separator={<Ruler type='horizontal' size='small' />}>
        <Tab title='Comic'>
            <ComicEditor onCreate={createComicReaction} onCancel={handleDone} />
        </Tab>
        <Tab title='Comment'>
            <CommentForm limit={MESSAGE_MAX_LENGTH} onCreate={createCommentReaction} onCancel={handleDone} />
        </Tab>
    </Tabs>;
}
