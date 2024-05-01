
import { useNavigate } from 'react-router-dom';

import johnDoe from '^/domain/authentication/johnDoe';
import createPost from '^/domain/post/create';

import { useAppContext } from '^/webui/contexts/module';

export default function hook()
{
    const navigate = useNavigate();
    const { identity } = useAppContext();

    return async (imageData: string) =>
    {
        await createPost(johnDoe, imageData);

        navigate(`/profile/${identity?.nickname}`);
    };
}
