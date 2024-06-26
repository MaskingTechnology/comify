
import { useCallback } from 'react';

import type { AggregatedData as PostView } from '^/domain/post/aggregate/types';

import { ConfirmationPanel, LoadingContainer, PostDetailsPanel } from '^/webui/components';
import { useAppContext } from '^/webui/contexts';
import { Column, Ruler } from '^/webui/designsystem';

import useEstablishRelation from './hooks/useEstablishRelation';
import usePost from './hooks/usePost';
import useRemovePost from './hooks/useRemovePost';
import useTogglePostRating from './hooks/useTogglePostRating';
import useViewProfile from './hooks/useViewProfile';

import Reactions from './Reactions';

export default function Feature()
{
    const { showModal, closeModal } = useAppContext();

    const establishRelation = useEstablishRelation();
    const togglePostRating = useTogglePostRating();
    const viewProfile = useViewProfile();
    const removePost = useRemovePost();

    const [post] = usePost();

    const deletePost = useCallback(async (post: PostView) =>
    {
        const panel = <ConfirmationPanel
            message='Are you sure you want to delete this post?'
            onConfirm={() => { closeModal(); removePost(post); }}
            onCancel={() => closeModal()} />;

        showModal(panel);

    }, [showModal, closeModal, removePost]);

    return <Column gap='medium' alignX='stretch'>
        <LoadingContainer data={post}>
            <PostDetailsPanel
                post={post as PostView}
                onFollowClick={establishRelation}
                onRatingClick={togglePostRating}
                onCreatorClick={viewProfile}
                onDeleteClick={deletePost}
            />
            <Ruler direction='horizontal' />
            <Reactions post={post as PostView} />
        </LoadingContainer>
    </Column>;
}
