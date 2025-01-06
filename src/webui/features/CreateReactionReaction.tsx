
import type { AggregatedData as ReactionView } from '^/domain/reaction/aggregate/types';

import { ComicEditor, CommentForm } from '^/webui/components';
import { Ruler, Tab, Tabs } from '^/webui/designsystem';

import useCreateComicReaction from './hooks/useCreateReactionComicReaction';
import useCreateCommentReaction from './hooks/useCreateReactionCommentReaction';

type Props = {
    readonly reaction: ReactionView;
    readonly handleDone: (reaction?: ReactionView) => void;
};


const MESSAGE_MAX_LENGTH = 1000;

export default function Feature({ reaction, handleDone }: Props)
{
    const createComicReaction = useCreateComicReaction(reaction, handleDone);
    const createCommentReaction = useCreateCommentReaction(reaction, handleDone);

    return <Tabs separator={<Ruler direction='horizontal' size='small' />}>
        <Tab id='comic' title='Comic'>
            <ComicEditor onCreate={createComicReaction} onCancel={() => handleDone(undefined)} />
        </Tab>
        <Tab id='comment' title='Comment'>
            <CommentForm limit={MESSAGE_MAX_LENGTH} onCreate={createCommentReaction} onCancel={() => handleDone(undefined)} />
        </Tab>
    </Tabs>;
}
