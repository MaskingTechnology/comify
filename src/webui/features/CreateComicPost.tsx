
import { useNavigate } from 'react-router-dom';

import johnDoe from '^/domain/authentication/johnDoe';
import createPost from '^/domain/post/create';

import { ComicEditor } from '^/webui/components/module';
import { useAppContext } from '^/webui/contexts/module';
import { Column } from '^/webui/designsystem/module';

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
        <ComicEditor createHandler={handleCreate} />
    </Column>;
}
