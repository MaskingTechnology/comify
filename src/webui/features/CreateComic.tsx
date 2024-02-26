
import johnDoe from '../../domain/authentication/johnDoe';
import makePost from '../../domain/post/make';
import Editor from '../components/comic/Editor';
import { Column } from '../designsystem/module';

export default function Feature()
{
    const handleCreate = async (imageData: string) =>
    {
        await makePost(johnDoe, imageData);
    };

    return <Column alignX='stretch'>
        <Editor createHandler={handleCreate} />
    </Column>;
}
