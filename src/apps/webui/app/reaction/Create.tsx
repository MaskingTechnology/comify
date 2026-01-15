
import { useParams, Outlet } from 'react-router-dom';

import { Modal, Tabs } from '~/app/common';

import useViewPostDetails from './hooks/useViewPostDetails';

const tabItems = [
    { name: 'Comic', route: 'comic' },
    { name: 'Comment', route: 'comment' }
];

type ParamProps = {
    readonly postId: string;
};

export default function Feature()
{
    const {postId} = useParams<ParamProps>();
    
    const onCreated = useViewPostDetails(postId);
    const onCancelled = useViewPostDetails(postId);

    return <Modal>
        <Tabs items={tabItems}>
            <Outlet context={{ postId, onCreated, onCancelled }} />
        </Tabs>
    </Modal>;
}
