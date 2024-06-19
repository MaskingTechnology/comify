
import type { AggregatedData as CreatorView } from '^/domain/creator/aggregate/types';

import { PostPanelGrid, ResultSet, ScrollLoader } from '^/webui/components';
import { Column } from '^/webui/designsystem';

import useCreatorPosts from './hooks/useCreatorPosts';
import useTogglePostRating from './hooks/useTogglePostRating';
import useViewPostDetails from './hooks/useViewPostDetails';

type Props = {
    readonly creator: CreatorView;
};

const SCROLL_THRESHOLD = 0.9;

export default function Feature({ creator }: Props)
{
    const viewPostDetails = useViewPostDetails();
    const togglePostRating = useTogglePostRating();

    const [posts, isLoading, isFinished, getMorePosts] = useCreatorPosts(creator);

    return <Column gap='small' alignX='stretch'>
        <ScrollLoader onScroll={getMorePosts} isLoading={isLoading} isFinished={isFinished} threshold={SCROLL_THRESHOLD}>
            <ResultSet data={posts} isLoading={isLoading}>
                <PostPanelGrid
                    posts={posts}
                    onComicClick={viewPostDetails}
                    onRatingClick={togglePostRating}
                    onReactionClick={viewPostDetails}
                />
            </ResultSet>
        </ScrollLoader>
    </Column>;
}
