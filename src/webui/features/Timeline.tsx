

import { OrderRow, PostPanelList, ResultSet, ScrollLoader } from '^/webui/components';
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

    const [posts, isLoading, isFinished, getMorePosts] = useTimelinePosts();

    return <Column gap='small' alignX='stretch'>
        <OrderRow selected='recent' onOrderChange={reorderList} />
        <ScrollLoader onScroll={getMorePosts} isLoading={isLoading} isFinished={isFinished}>
            <ResultSet data={posts} isLoading={isLoading}>
                <PostPanelList
                    posts={posts}
                    onFollowClick={establishRelation}
                    onCreatorClick={viewProfile}
                    onComicClick={viewPostDetails}
                    onRatingClick={togglePostRating}
                    onReactionClick={viewPostDetails}
                />
            </ResultSet>
        </ScrollLoader>
    </Column>;
}
