
import type PostView from '^/domain/post/view/PostView';

import { LoadingContainer, PostDetailsPanel } from '^/webui/components/module';
import { Column, Ruler } from '^/webui/designsystem/module';
import { useEstablishRelation, usePost, useTogglePostRating, useViewProfile } from '^/webui/hooks/module';

import Reactions from './Reactions';

export default function Feature()
{
    const establishRelation = useEstablishRelation();
    const togglePostRating = useTogglePostRating();
    const viewProfile = useViewProfile();

    const [post] = usePost();

    return <Column gap='medium' alignX='stretch'>
        <LoadingContainer data={post}>
            <PostDetailsPanel
                post={post as PostView}
                onFollowClick={establishRelation}
                onRatingClick={togglePostRating}
                onCreatorClick={viewProfile}
            />
            <Ruler type='horizontal' />
            <Reactions post={post as PostView} />
        </LoadingContainer>
    </Column>;
}
