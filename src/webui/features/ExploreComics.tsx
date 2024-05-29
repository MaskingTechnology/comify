
import type { AggregatedData as PostView } from '^/domain/post/aggregate/types';

import { LoadingContainer, OrderRow, PostPanelList } from '^/webui/components';
import { Column } from '^/webui/designsystem';
import { useEstablishRelation, useExplorePosts, useReorderList, useTogglePostRating, useViewPostDetails, useViewProfile } from '^/webui/hooks';

export default function Feature()
{
    const togglePostRating = useTogglePostRating();
    const establishRelation = useEstablishRelation();
    const viewProfile = useViewProfile();
    const viewPostDetails = useViewPostDetails();
    const reorderList = useReorderList();

    const [posts] = useExplorePosts();

    return <Column gap='small' alignX='stretch'>
        <OrderRow selected='popular' onOrderChange={reorderList} />
        <LoadingContainer data={posts}>
            <PostPanelList
                posts={posts as PostView[]}
                onFollowClick={establishRelation}
                onRatingClick={togglePostRating}
                onReactionClick={viewPostDetails}
                onCreatorClick={viewProfile}
                onComicClick={viewPostDetails}
            />
        </LoadingContainer>
    </Column>;
}
