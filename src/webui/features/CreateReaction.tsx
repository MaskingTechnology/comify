
import { ComicEditor, CommentForm } from '^/webui/components/module';
import { Ruler, Tab, Tabs } from '^/webui/designsystem/module';

type Props = {
    handleDone: () => void;
};

export default function Feature({ handleDone }: Props)
{
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const createComic = async (imageData: string) =>
    {
        console.log('Create comic');
        handleDone();
    };

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const createComment = async (commentText: string) =>
    {
        console.log('Create comment');
        handleDone();
    };

    return <Tabs separator={<Ruler type='horizontal' size='small' />}>
        <Tab title='Comic'>
            <ComicEditor createHandler={createComic} />
        </Tab>
        <Tab title='Comment'>
            <CommentForm createHandler={createComment} />
        </Tab>
    </Tabs>;
}
