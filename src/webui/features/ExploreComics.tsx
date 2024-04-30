

import type PostView from '^/domain/post/view/PostView';

import { LoadingContainer, OrderRow, PostPanelList } from '^/webui/components/module';
import { Column } from '^/webui/designsystem/module';
import { useEstablishRelation, useExplorePosts, useReorderList, useToggleRating, useViewPostDetails, useViewProfile } from '^/webui/hooks/module';

export default function Feature()
{
    const toggleRating = useToggleRating();
    const establishRelation = useEstablishRelation();
    const viewProfile = useViewProfile();
    const viewPostDetails = useViewPostDetails();
    const reorderList = useReorderList();

    const [posts] = useExplorePosts();

    return <Column gap='small' alignX='stretch'>
        <OrderRow selected='popular' orderChangeHandler={reorderList} />
        <LoadingContainer data={posts}>
            <PostPanelList
                posts={posts as PostView[]}
                followHandler={establishRelation}
                rateHandler={toggleRating}
                profileHandler={viewProfile}
                detailsHandler={viewPostDetails}
            />
        </LoadingContainer>
    </Column>;
}
