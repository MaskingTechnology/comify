

import type PostView from '^/domain/post/view/PostView';

import { LoadingContainer, OrderRow, PostPanelList } from '^/webui/components/module';
import { Column } from '^/webui/designsystem/module';
import { useEstablishRelation, useExplorePosts, useReorderList, useTogglePostRating, useViewPostDetails, useViewProfile } from '^/webui/hooks/module';

export default function Feature()
{
    const togglePostRating = useTogglePostRating();
    const establishRelation = useEstablishRelation();
    const viewProfile = useViewProfile();
    const viewPostDetails = useViewPostDetails();
    const reorderList = useReorderList();

    const [posts] = useExplorePosts();

    return <Column gap='small' alignX='stretch'>
        <OrderRow selected='popular' onOrderChange={reorderList} />
        <LoadingContainer data={posts}>
            <PostPanelList
                posts={posts as PostView[]}
                onFollowClick={establishRelation}
                onRatingClick={togglePostRating}
                onReactionClick={viewPostDetails}
                onCreatorClick={viewProfile}
                onComicClick={viewPostDetails}
            />
        </LoadingContainer>
    </Column>;
}
