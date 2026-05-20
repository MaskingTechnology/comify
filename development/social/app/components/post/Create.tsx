
import { Editor } from '~/components/comic';

import useAddComicPost from './hooks/useAddComicPost';

export default function Feature()
{
    const addComicPost = useAddComicPost();

    return <Editor onCreate={addComicPost} />;
}
