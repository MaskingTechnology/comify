
import type { AggregatedData as PostView } from '^/domain/post/aggregate/types';

import { LoadingContainer, OrderRow, PostPanelList, ScrollWatcher } from '^/webui/components';
import { Column } from '^/webui/designsystem';
import { useEstablishRelation, useExplorePosts, useReorderList, useTogglePostRating, useViewPostDetails, useViewProfile } from '^/webui/hooks';

const SCROLL_THRESHOLD = 0.7;

export default function Feature()
{
    const togglePostRating = useTogglePostRating();
    const establishRelation = useEstablishRelation();
    const viewProfile = useViewProfile();
    const viewPostDetails = useViewPostDetails();
    const reorderList = useReorderList();

    const [posts, getMorePosts] = useExplorePosts();

    return <Column gap='small' alignX='stretch'>
        <OrderRow selected='popular' onOrderChange={reorderList} />
        <LoadingContainer data={posts}>
            <ScrollWatcher onTrigger={getMorePosts} threshold={SCROLL_THRESHOLD}>
                <PostPanelList
                    posts={posts as PostView[]}
                    onFollowClick={establishRelation}
                    onRatingClick={togglePostRating}
                    onReactionClick={viewPostDetails}
                    onCreatorClick={viewProfile}
                    onComicClick={viewPostDetails}
                />
            </ScrollWatcher>
        </LoadingContainer>
    </Column>;
}
