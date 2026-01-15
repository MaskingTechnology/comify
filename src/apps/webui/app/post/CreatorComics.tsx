
import { Column } from '@maskingtech/designsystem';

import { PullToRefresh, LoadingAndResultContainer, ScrollLoader } from '~/app/common';
import { useToggle } from '~/app/rating';

import useCreatorPosts from './hooks/useCreatorPosts';
import useViewPostDetails from './hooks/useViewPostDetails';

import PanelGrid from './components/PanelGrid';

type Props = {
    readonly creatorId: string;
};

const SCROLL_THRESHOLD = 0.9;

export default function Feature({ creatorId }: Props)
{
    const viewPostDetails = useViewPostDetails();
    const toggleRating = useToggle();

    const [posts, isLoading, isFinished, getMorePosts, , refresh] = useCreatorPosts(creatorId);

    return <Column gap='medium' alignX='stretch'>
        <PullToRefresh onRefresh={refresh}>
            <ScrollLoader onLoad={getMorePosts} isLoading={isLoading} isFinished={isFinished} threshold={SCROLL_THRESHOLD}>
                <LoadingAndResultContainer data={posts} isLoading={isLoading}>
                    <PanelGrid
                        posts={posts}
                        onContentClick={viewPostDetails}
                        onRatingClick={toggleRating}
                        onReactionClick={viewPostDetails}
                    />
                </LoadingAndResultContainer>
            </ScrollLoader>
        </PullToRefresh>
    </Column>;
}
