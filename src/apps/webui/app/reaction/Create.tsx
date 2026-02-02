
import { useParams, Outlet } from 'react-router-dom';

import { Modal, Tabs } from '~/app/common';

import useViewPost from './hooks/useViewPost';
import useViewReaction from './hooks/useViewReaction';

const tabItems = [
    { title: 'Comic', route: 'comic' },
    { title: 'Comment', route: 'comment' }
];

type ParamProps = {
    readonly postId: string;
};

export default function Feature()
{
    const {postId} = useParams<ParamProps>();
    
    const onCreated = useViewReaction(postId);
    const onCancelled = useViewPost(postId);

    return <Modal>
        <Tabs items={tabItems}>
            <Outlet context={{ postId, onCreated, onCancelled }} />
        </Tabs>
    </Modal>;
}
