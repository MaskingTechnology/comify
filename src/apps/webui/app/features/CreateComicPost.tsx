
import { Column } from '@maskingtech/designsystem';
import { ComicEditor } from '../components';

import useAddComicPost from './hooks/useAddComicPost';

export default function Feature()
{
    const addComicPost = useAddComicPost();

    return <Column alignX='stretch'>
        <ComicEditor onCreate={addComicPost} />
    </Column>;
}
