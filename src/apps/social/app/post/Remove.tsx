
import { useNavigate, useParams } from 'react-router-dom';

import { ConfirmationPanel, Modal } from '~/app/common';

import useRemove from './hooks/useRemovePost';

export default function Feature()
{
    const navigate = useNavigate();
    const { postId } = useParams();

    const onConfirm = useRemove(postId);
    const onCancel = () => navigate(-1);

    return <Modal>
        <ConfirmationPanel
            message="Are you sure you want to remove this post?"
            onConfirm={onConfirm}
            onCancel={onCancel}
        />
    </Modal>;
}
