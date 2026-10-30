
import { useNavigate, useParams } from 'react-router-dom';

import { Modal } from '~/components/common';
import { Form } from '~/components/post.report';

import useReportPost from './hooks/useReportPost';

const REMARK_MAX_LENGTH = 1000;

export default function ()
{
    const navigate = useNavigate();
    const { postId } = useParams();

    const onReport = useReportPost(postId);
    const onCancel = () => navigate(-1);

    return <Modal>
        <Form remarkLimit={REMARK_MAX_LENGTH} onReport={onReport} onCancel={onCancel} />
    </Modal>;
}
