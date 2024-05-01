
import type PostView from '^/domain/post/view/PostView';

import { LoadingContainer, OrderRow, PostPanelList } from '^/webui/components';
import { Column } from '^/webui/designsystem';
import { useEstablishRelation, useReorderList, useTimelinePosts, useTogglePostRating, useViewPostDetails, useViewProfile } from '^/webui/hooks';

export default function Feature()
{
    const establishRelation = useEstablishRelation();
    const togglePostRating = useTogglePostRating();
    const reorderList = useReorderList();
    const viewPostDetails = useViewPostDetails();
    const viewProfile = useViewProfile();

    const [posts] = useTimelinePosts();

    return <Column gap='small' alignX='stretch'>
        <OrderRow selected='recent' onOrderChange={reorderList} />
        <LoadingContainer data={posts}>
            <PostPanelList
                posts={posts as PostView[]}
                onFollowClick={establishRelation}
                onCreatorClick={viewProfile}
                onComicClick={viewPostDetails}
                onRatingClick={togglePostRating}
                onReactionClick={viewPostDetails}
            />
        </LoadingContainer>
    </Column>;
}
