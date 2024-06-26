
import type { AggregatedData as PostView } from '^/domain/post/aggregate/types';

import { Column } from '^/webui/designsystem';
import { LoadingContainer, PostPanelList } from '../components';
import { useEstablishRelation, usePostsFollowing, useTogglePostRating, useViewPostDetails, useViewProfile } from '../hooks';

export default function Feature()
{
    const establishRelation = useEstablishRelation();
    const viewProfile = useViewProfile();
    const viewPostDetails = useViewPostDetails();
    const togglePostRating = useTogglePostRating();

    const [posts] = usePostsFollowing();

    return <Column gap='small' alignX='stretch'>
        <LoadingContainer data={posts}>
            <PostPanelList
                posts={posts as PostView[]}
                onFollowClick={establishRelation}
                onCreatorClick={viewProfile}
                onComicClick={viewPostDetails}
                onRatingClick={togglePostRating}
                onReactionClick={viewPostDetails}
            />
        </LoadingContainer>
    </Column>;
}
