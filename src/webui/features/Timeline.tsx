
import type PostView from '^/domain/post/view/PostView';

import { LoadingContainer, OrderRow, PostPanelList } from '^/webui/components/module';
import { Column } from '^/webui/designsystem/module';
import { useEstablishRelation, useReorderList, useTimelinePosts, useToggleRating, useViewPostDetails, useViewProfile } from '^/webui/hooks/module';

export default function Feature()
{
    const establishRelation = useEstablishRelation();
    const toggleRating = useToggleRating();
    const reorderList = useReorderList();
    const viewPostDetails = useViewPostDetails();
    const viewProfile = useViewProfile();

    const [posts] = useTimelinePosts();

    return <Column gap='small' alignX='stretch'>
        <OrderRow selected='recent' orderChangeHandler={reorderList} />
        <LoadingContainer data={posts}>
            <PostPanelList
                posts={posts as PostView[]}
                followHandler={establishRelation}
                rateHandler={toggleRating}
                detailsHandler={viewPostDetails}
                profileHandler={viewProfile}
            />
        </LoadingContainer>
    </Column>;
}
