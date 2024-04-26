
import { ComicEditor, CommentForm } from '^/webui/components/module';
import { Ruler, Tab, Tabs } from '^/webui/designsystem/module';

import johnDoe from '^/domain/authentication/johnDoe';
import PostView from '^/domain/post/view/PostView';
import create from '^/domain/reaction/create';

type Props = {
    post: PostView;
    handleDone: () => void;
};

export default function Feature({ post, handleDone }: Props)
{
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const createComic = async (imageData: string) =>
    {
        await create(johnDoe, post.id, undefined, imageData);

        handleDone();
    };

    const createComment = async (commentText: string) =>
    {
        await create(johnDoe, post.id, commentText);

        handleDone();
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
