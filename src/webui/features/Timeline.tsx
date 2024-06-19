

import { OrderRow, PostPanelList, ResultSet, ScrollLoader } from '^/webui/components';
import { Column } from '^/webui/designsystem';

import useEstablishRelation from './hooks/useEstablishRelation';
import useReorderList from './hooks/useReorderList';
import useTimelinePosts from './hooks/useTimelinePosts';
import useTogglePostRating from './hooks/useTogglePostRating';
import useViewPostDetails from './hooks/useViewPostDetails';
import useViewProfile from './hooks/useViewProfile';

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
        <ScrollLoader onScroll={getMorePosts} isLoading={isLoading} isFinished={isFinished} threshold={SCROLL_THRESHOLD}>
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
