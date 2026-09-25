
import { Editor } from '~/components/post.comic';

import useAddComicPost from './hooks/useAddComicPost';

export default function ()
{
    const addComicPost = useAddComicPost();

    return <Editor onCreate={addComicPost} />;
}
