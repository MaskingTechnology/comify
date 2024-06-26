
import type { AggregatedData as PostView } from '^/domain/post/aggregate/types';
import type { AggregatedData as ReactionView } from '^/domain/reaction/aggregate/types';

import { ComicEditor, CommentForm } from '^/webui/components';
import { Ruler, Tab, Tabs } from '^/webui/designsystem';

import useCreateComicReaction from './hooks/useCreateComicReaction';
import useCreateCommentReaction from './hooks/useCreateCommentReaction';

type Props = {
    readonly post: PostView;
    readonly handleDone: (reaction?: ReactionView) => void;
};

const MESSAGE_MAX_LENGTH = 1000;

export default function Feature({ post, handleDone }: Props)
{
    const createComicReaction = useCreateComicReaction(post, handleDone);
    const createCommentReaction = useCreateCommentReaction(post, handleDone);

    return <Tabs separator={<Ruler direction='horizontal' size='small' />}>
        <Tab id='comic' title='Comic'>
            <ComicEditor onCreate={createComicReaction} onCancel={() => handleDone(undefined)} />
        </Tab>
        <Tab id='comment' title='Comment'>
            <CommentForm limit={MESSAGE_MAX_LENGTH} onCreate={createCommentReaction} onCancel={() => handleDone(undefined)} />
        </Tab>
    </Tabs>;
}
