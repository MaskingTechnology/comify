
import type { AggregatedData as PostView } from '^/domain/post/aggregate/types';

import { LoadingContainer, OrderRow, PostPanelList, ScrollWatcher } from '^/webui/components';
import { Column } from '^/webui/designsystem';
import { useEstablishRelation, useReorderList, useTimelinePosts, useTogglePostRating, useViewPostDetails, useViewProfile } from '^/webui/hooks';

const SCROLL_THRESHOLD = 0.7;

export default function Feature()
{
    const establishRelation = useEstablishRelation();
    const togglePostRating = useTogglePostRating();
    const reorderList = useReorderList();
    const viewPostDetails = useViewPostDetails();
    const viewProfile = useViewProfile();

    const [posts, getMorePosts] = useTimelinePosts();

    return <Column gap='small' alignX='stretch'>
        <OrderRow selected='recent' onOrderChange={reorderList} />
        <LoadingContainer data={posts}>
            <ScrollWatcher onTrigger={getMorePosts} threshold={SCROLL_THRESHOLD}>
                <PostPanelList
                    posts={posts as PostView[]}
                    onFollowClick={establishRelation}
                    onCreatorClick={viewProfile}
                    onComicClick={viewPostDetails}
                    onRatingClick={togglePostRating}
                    onReactionClick={viewPostDetails}
                />
            </ScrollWatcher>
        </LoadingContainer>
    </Column>;
}
