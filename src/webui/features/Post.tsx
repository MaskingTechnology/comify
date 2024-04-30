
import type PostView from '^/domain/post/view/PostView';

import { LoadingContainer, PostDetailsPanel } from '^/webui/components/module';
import { Column, Ruler } from '^/webui/designsystem/module';
import { useEditProfile, useEstablishRelation, usePost, useToggleRating, useViewProfile } from '^/webui/hooks/module';

import Reactions from './Reactions';

export default function Feature()
{
    const establishRelation = useEstablishRelation();
    const toggleRating = useToggleRating();
    const viewProfile = useViewProfile();
    const editProfile = useEditProfile();

    const [post] = usePost();

    return <Column gap='medium' alignX='stretch'>
        <LoadingContainer data={post}>
            <PostDetailsPanel
                post={post as PostView}
                followHandler={establishRelation}
                rateHandler={toggleRating}
                profileHandler={viewProfile}
                editHandler={editProfile}
            />
            <Ruler type='horizontal' />
            <Reactions post={post as PostView} />
        </LoadingContainer>
    </Column>;
}
