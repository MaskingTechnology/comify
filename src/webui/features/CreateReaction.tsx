
import { ComicEditor, CommentForm } from '^/webui/components/module';
import { Ruler, Tab, Tabs } from '^/webui/designsystem/module';

import johnDoe from '^/domain/authentication/johnDoe';
import PostView from '^/domain/post/view/PostView';
import createComicReaction from '^/domain/reaction/createComic';
import createCommentReaction from '^/domain/reaction/createComment';
import type ReactionView from '^/domain/reaction/view/ReactionView';

type Props = {
    post: PostView;
    handleDone: (reaction?: ReactionView) => void;
};

export default function Feature({ post, handleDone }: Props)
{
    const createComic = async (imageData: string) =>
    {
        const reaction = await createComicReaction(johnDoe, post.id, imageData);

        handleDone(reaction);
    };

    const createComment = async (commentText: string) =>
    {
        const reaction = await createCommentReaction(johnDoe, post.id, commentText);

        handleDone(reaction);
    };

    const cancelReaction = () =>
    {
        handleDone();
    };

    return <Tabs separator={<Ruler type='horizontal' size='small' />}>
        <Tab title='Comic'>
            <ComicEditor createHandler={createComic} cancelHandler={cancelReaction} />
        </Tab>
        <Tab title='Comment'>
            <CommentForm createHandler={createComment} cancelHandler={cancelReaction} />
        </Tab>
    </Tabs>;
}
