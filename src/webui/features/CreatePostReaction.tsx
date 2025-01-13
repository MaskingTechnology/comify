
import type { AggregatedData as AggregatedPostData } from '^/domain/post/aggregate';
import type { AggregatedData as AggregatedReactionData } from '^/domain/reaction/aggregate';

import { ComicEditor, CommentForm } from '^/webui/components';
import { Ruler, Tab, Tabs } from '^/webui/designsystem';

import useCreatePostComicReaction from './hooks/useCreatePostComicReaction';
import useCreatePostCommentReaction from './hooks/useCreatePostCommentReaction';

type Props = {
    readonly post: AggregatedPostData;
    readonly handleDone: (reaction?: AggregatedReactionData) => void;
};

const MESSAGE_MAX_LENGTH = 1000;

export default function Feature({ post, handleDone }: Props)
{
    const createComicReaction = useCreatePostComicReaction(post, handleDone);
    const createCommentReaction = useCreatePostCommentReaction(post, handleDone);

    return <Tabs separator={<Ruler direction='horizontal' size='small' />}>
        <Tab id='comic' title='Comic'>
            <ComicEditor onCreate={createComicReaction} onCancel={() => handleDone(undefined)} />
        </Tab>
        <Tab id='comment' title='Comment'>
            <CommentForm limit={MESSAGE_MAX_LENGTH} onCreate={createCommentReaction} onCancel={() => handleDone(undefined)} />
        </Tab>
    </Tabs>;
}
