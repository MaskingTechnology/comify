
import { OrderRow, PostPanelList, ResultSet, ScrollLoader } from '^/webui/components';
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

    const [posts, isLoading, isFinished, getMorePosts] = useExplorePosts();

    return <Column gap='small' alignX='stretch'>
        <OrderRow selected='popular' onOrderChange={reorderList} />
        <ScrollLoader onScroll={getMorePosts} isLoading={isLoading} isFinished={isFinished} threshold={SCROLL_THRESHOLD}>
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
    </Column>;
}
