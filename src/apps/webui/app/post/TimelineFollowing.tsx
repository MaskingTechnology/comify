
import { Column } from '@maskingtech/designsystem';

import { PullToRefresh, LoadingAndResultContainer, ScrollLoader } from '~/app/common';
import { useViewProfile } from '~/app/profile';
import { useToggle } from '~/app/rating';
import { useEstablish } from '~/app/relation';

import PanelList from './components/PanelList';

import usePostsFollowing from './hooks/usePostsFollowing';
import useViewPostDetails from './hooks/useViewPostDetails';

const SCROLL_THRESHOLD = 0.7;

export default function Feature()
{
    const establishRelation = useEstablish();
    const viewProfile = useViewProfile();
    const viewPostDetails = useViewPostDetails();
    const togglePostRating = useToggle();

    const [posts, isLoading, isFinished, getMorePosts, , refresh] = usePostsFollowing();

    return <Column gap='medium' alignX='stretch'>
        <PullToRefresh onRefresh={refresh}>
            <ScrollLoader onLoad={getMorePosts} isLoading={isLoading} isFinished={isFinished} threshold={SCROLL_THRESHOLD}>
                <LoadingAndResultContainer data={posts} isLoading={isLoading}>
                    <PanelList
                        posts={posts}
                        onFollowClick={establishRelation}
                        onRatingClick={togglePostRating}
                        onReactionClick={viewPostDetails}
                        onCreatorClick={viewProfile}
                        onContentClick={viewPostDetails}
                    />
                </LoadingAndResultContainer>
            </ScrollLoader>
        </PullToRefresh>
    </Column>;
}
