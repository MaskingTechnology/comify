
import { Column } from '@maskingtech/designsystem';
import { OrderRow, PostPanelList, PullToRefresh, ResultSet, ScrollLoader } from '^/webui/components';

import useEstablishRelation from './hooks/useEstablishRelation';
import useExplorePosts from './hooks/useExplorePosts';
import useReorderList from './hooks/useReorderList';
import useTogglePostRating from './hooks/useTogglePostRating';
import useViewPostDetails from './hooks/useViewPostDetails';
import useViewProfile from './hooks/useViewProfile';

const SCROLL_THRESHOLD = 0.7;

export default function Feature()
{
    const togglePostRating = useTogglePostRating();
    const establishRelation = useEstablishRelation();
    const viewProfile = useViewProfile();
    const viewPostDetails = useViewPostDetails();
    const reorderList = useReorderList();

    const [posts, isLoading, isFinished, getMorePosts, , refresh] = useExplorePosts();

    return <Column gap='small' alignX='stretch'>
        <OrderRow selected='popular' onOrderChange={reorderList} />
        <PullToRefresh onRefresh={refresh}>
            <ScrollLoader onLoad={getMorePosts} isLoading={isLoading} isFinished={isFinished} threshold={SCROLL_THRESHOLD}>
                <ResultSet data={posts} isLoading={isLoading}>
                    <PostPanelList
                        posts={posts}
                        onFollowClick={establishRelation}
                        onRatingClick={togglePostRating}
                        onReactionClick={viewPostDetails}
                        onCreatorClick={viewProfile}
                        onContentClick={viewPostDetails}
                    />
                </ResultSet>
            </ScrollLoader>
        </PullToRefresh>
    </Column>;
}
