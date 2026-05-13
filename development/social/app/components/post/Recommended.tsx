
import { Column } from '@maskingtech/designsystem';

import { PullToRefresh, ResultContainer, ScrollLoader } from '~/components/common';
import { useViewProfile } from '~/components/profile';
import { useToggle } from '~/components/rating';
import { useEstablish } from '~/components/relation';

import PanelList from './components/PanelList';

import useViewPostDetails from './hooks/useViewPostDetails';
import usePostsRecommended from './hooks/usePostsRecommended';

const SCROLL_THRESHOLD = 0.7;

export default function Feature()
{
    const establishRelation = useEstablish();
    const viewProfile = useViewProfile();
    const viewPostDetails = useViewPostDetails();
    const togglePostRating = useToggle();

    const [posts, isLoading, isFinished, getMorePosts, , refresh] = usePostsRecommended();

    return <Column gap='medium' alignX='stretch'>
        <PullToRefresh onRefresh={refresh}>
            <ScrollLoader onLoad={getMorePosts} isLoading={isLoading} isFinished={isFinished} threshold={SCROLL_THRESHOLD}>
                <ResultContainer data={posts} isLoading={isLoading}>
                    <PanelList
                        posts={posts}
                        onFollowClick={establishRelation}
                        onRatingClick={togglePostRating}
                        onReactionClick={viewPostDetails}
                        onCreatorClick={viewProfile}
                        onContentClick={viewPostDetails}
                    />
                </ResultContainer>
            </ScrollLoader>
        </PullToRefresh>
    </Column>;
}
