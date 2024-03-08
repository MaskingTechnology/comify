
import { useNavigate } from 'react-router-dom';
import johnDoe from '../../domain/authentication/johnDoe';
import createPost from '../../domain/post/create';
import Editor from '../components/comic/Editor';
import { useAppContext } from '../contexts/AppContext';
import { Column } from '../designsystem/module';

export default function Feature()
{
    const navigate = useNavigate();
    const { identity } = useAppContext();

    const handleCreate = async (imageData: string) =>
    {
        await createPost(johnDoe, imageData);

        navigate(`/profile/${identity?.nickname}`);
    };

    return <Column alignX='stretch'>
        <Editor createHandler={handleCreate} />
    </Column>;
}
