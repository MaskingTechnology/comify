
import { ComicEditor } from '^/webui/components';
import { Column } from '^/webui/designsystem';
import { useCreateComicPost } from '^/webui/hooks';

export default function Feature()
{
    const createComicPost = useCreateComicPost();

    return <Column alignX='stretch'>
        <ComicEditor onCreate={createComicPost} />
    </Column>;
}
