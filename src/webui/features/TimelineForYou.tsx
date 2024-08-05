
import { PostPanelList, PullToRefresh, ResultSet, ScrollLoader } from '^/webui/components';
import { Column } from '^/webui/designsystem';

import useEstablishRelation from './hooks/useEstablishRelation';
import usePostsAll from './hooks/usePostsAll';
import useTogglePostRating from './hooks/useTogglePostRating';
import useViewPostDetails from './hooks/useViewPostDetails';
import useViewProfile from './hooks/useViewProfile';

const SCROLL_THRESHOLD = 0.7;

export default function Feature()
{
    const establishRelation = useEstablishRelation();
    const viewProfile = useViewProfile();
    const viewPostDetails = useViewPostDetails();
    const togglePostRating = useTogglePostRating();

    const [posts, isLoading, isFinished, getMorePosts, , refresh] = usePostsAll();

    return <Column gap='small' alignX='stretch'>
        <PullToRefresh onRefresh={refresh}>
            <ScrollLoader onLoad={getMorePosts} isLoading={isLoading} isFinished={isFinished} threshold={SCROLL_THRESHOLD}>
                <ResultSet data={posts} isLoading={isLoading}>
                    <PostPanelList
                        posts={posts}
                        onFollowClick={establishRelation}
                        onRatingClick={togglePostRating}
                        onReactionClick={viewPostDetails}
                        onCreatorClick={viewProfile}
                        onComicClick={viewPostDetails}
                    />
                </ResultSet>
            </ScrollLoader>
        </PullToRefresh>
    </Column>;
}
