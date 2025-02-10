
import { ComicEditor } from '^/webui/components';
import { Column } from '^/webui/designsystem';

import useAddComicPost from './hooks/useAddComicPost';

export default function Feature()
{
    const addComicPost = useAddComicPost();

    return <Column alignX='stretch'>
        <ComicEditor onCreate={addComicPost} />
    </Column>;
}
