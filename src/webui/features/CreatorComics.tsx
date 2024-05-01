
import type CreatorView from '^/domain/creator/view/CreatorView';
import type PostView from '^/domain/post/view/PostView';

import { LoadingContainer, PostPanelGrid } from '^/webui/components/module';
import { Column } from '^/webui/designsystem/module';
import { useCreatorPosts, useTogglePostRating, useViewPostDetails } from '^/webui/hooks/module';

type Props = {
    creator: CreatorView;
};

export default function Feature({ creator }: Props)
{
    const viewPostDetails = useViewPostDetails();
    const togglePostRating = useTogglePostRating();

    const [posts] = useCreatorPosts(creator);

    return <Column gap='small' alignX='stretch'>
        <LoadingContainer data={posts}>
            <PostPanelGrid
                posts={posts as PostView[]}
                onComicClick={viewPostDetails}
                onRatingClick={togglePostRating}
                onReactionClick={viewPostDetails}
            />
        </LoadingContainer>
    </Column>;
}
