
import { useOutletContext } from 'react-router-dom';

import { Editor } from '~/app/comic';

import useCreateComic from './hooks/useCreateComic';

type Props = {
    readonly postId: string;
    readonly onCreated: (reactionId: string) => void;
    readonly onCancelled: () => void;
};

export default function Feature()
{
    const { postId, onCreated, onCancelled } = useOutletContext<Props>();

    const createComic = useCreateComic(postId, onCreated);

    return <Editor onCreate={createComic} onCancel={onCancelled} />;
}
