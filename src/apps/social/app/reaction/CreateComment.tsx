
import { useOutletContext } from 'react-router-dom';

import { Form } from '~/app/comment';

import useCreateComment from './hooks/useCreateComment';

type Props = {
    readonly postId: string;
    readonly onCreated: (reactionId: string) => void;
    readonly onCancelled: () => void;
};

const MESSAGE_MAX_LENGTH = 1000;

export default function Feature()
{
    const { postId, onCreated, onCancelled } = useOutletContext<Props>();

    const createComment = useCreateComment(postId, onCreated);

    return <Form limit={MESSAGE_MAX_LENGTH} onCreate={createComment} onCancel={onCancelled} />;
}
