
import johnDoe from '../../domain/authentication/johnDoe';
import createPost from '../../domain/post/create';
import Editor from '../components/comic/Editor';
import { Column } from '../designsystem/module';

export default function Feature()
{
    const handleCreate = async (imageData: string) =>
    {
        await createPost(johnDoe, imageData);
    };

    return <Column alignX='stretch'>
        <Editor createHandler={handleCreate} />
    </Column>;
}
