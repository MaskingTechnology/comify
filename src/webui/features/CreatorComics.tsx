
import type CreatorView from '^/domain/creator/view/CreatorView';
import type PostView from '^/domain/post/view/PostView';

import { LoadingContainer, PostPanelGrid } from '^/webui/components/module';
import { Column } from '^/webui/designsystem/module';
import { useCreatorPosts, useToggleRating, useViewPostDetails } from '^/webui/hooks/module';

type Props = {
    creator: CreatorView;
};

export default function Feature({ creator }: Props)
{
    const viewPostDetails = useViewPostDetails();
    const toggleRating = useToggleRating();

    const [posts] = useCreatorPosts(creator);

    return <Column gap='small' alignX='stretch'>
        <LoadingContainer data={posts}>
            <PostPanelGrid
                posts={posts as PostView[]}
                comicHandler={viewPostDetails}
                rateHandler={toggleRating}
                reactionHandler={viewPostDetails}
            />
        </LoadingContainer>
    </Column>;
}
