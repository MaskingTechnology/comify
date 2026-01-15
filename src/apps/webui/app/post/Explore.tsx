
import { Column } from '@maskingtech/designsystem';

import { PullToRefresh, LoadingAndResultContainer, ScrollLoader, OrderRow } from '~/app/common';

import { useViewProfile } from '~/app/profile';
import { useToggle } from '~/app/rating';
import { useEstablish } from '~/app/relation';

import PanelList from './components/PanelList';

import useExplorePosts from './hooks/useExplorePosts';
import useReorderList from './hooks/useReorderList';
import useViewPostDetails from './hooks/useViewPostDetails';

const SCROLL_THRESHOLD = 0.7;

export default function Feature()
{
    const togglePostRating = useToggle();
    const establishRelation = useEstablish();
    const viewProfile = useViewProfile();
    const viewPostDetails = useViewPostDetails();
    const reorderList = useReorderList();

    const [posts, isLoading, isFinished, getMorePosts, , refresh] = useExplorePosts();

    return <Column gap='small' alignX='stretch'>
        <OrderRow selected='popular' onOrderChange={reorderList} />
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
