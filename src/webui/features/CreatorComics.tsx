
import type { AggregatedData as CreatorView } from '^/domain/creator/aggregate/types';
import type { AggregatedData as PostView } from '^/domain/post/aggregate/types';

import { LoadingContainer, PostPanelGrid, ScrollWatcher } from '^/webui/components';
import { Column } from '^/webui/designsystem';
import { useCreatorPosts, useTogglePostRating, useViewPostDetails } from '^/webui/hooks';

type Props = {
    readonly creator: CreatorView;
};

const THRESHOLD = 0.9;

export default function Feature({ creator }: Props)
{
    const viewPostDetails = useViewPostDetails();
    const togglePostRating = useTogglePostRating();

    const [posts, getMorePosts] = useCreatorPosts(creator);

    return <Column gap='small' alignX='stretch'>
        <LoadingContainer data={posts}>
            <ScrollWatcher onTrigger={getMorePosts} threshold={THRESHOLD}>
                <PostPanelGrid
                    posts={posts as PostView[]}
                    onComicClick={viewPostDetails}
                    onRatingClick={togglePostRating}
                    onReactionClick={viewPostDetails}
                />
            </ScrollWatcher>
        </LoadingContainer>
    </Column>;
}
