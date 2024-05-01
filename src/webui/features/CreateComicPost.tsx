
import { ComicEditor } from '^/webui/components/module';
import { Column } from '^/webui/designsystem/module';
import { useCreateComicPost } from '^/webui/hooks/module';

export default function Feature()
{
    const createComicPost = useCreateComicPost();

    return <Column alignX='stretch'>
        <ComicEditor onCreate={createComicPost} />
    </Column>;
}
