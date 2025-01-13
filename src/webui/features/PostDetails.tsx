
import { useCallback } from 'react';

import type { AggregatedData as AggregatedPostData } from '^/domain/post/aggregate';

import { ConfirmationPanel, LoadingContainer, PostDetailsPanel } from '^/webui/components';
import { useAppContext } from '^/webui/contexts';
import { Column, Ruler } from '^/webui/designsystem';

import useEstablishRelation from './hooks/useEstablishRelation';
import usePost from './hooks/usePost';
import useRemovePost from './hooks/useRemovePost';
import useTogglePostRating from './hooks/useTogglePostRating';
import useViewPostDetails from './hooks/useViewPostDetails';
import useViewProfile from './hooks/useViewProfile';

import PostReactions from './PostReactions';

export default function Feature()
{
    const { showModal, closeModal } = useAppContext();

    const establishRelation = useEstablishRelation();
    const togglePostRating = useTogglePostRating();
    const viewProfile = useViewProfile();
    const removePost = useRemovePost();
    const viewPostDetails = useViewPostDetails();

    const [post] = usePost();

    const deletePost = useCallback(async (post: AggregatedPostData) =>
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
                post={post as AggregatedPostData}
                onFollowClick={establishRelation}
                onRatingClick={togglePostRating}
                onCreatorClick={viewProfile}
                onReactionClick={viewPostDetails}
                onDeleteClick={deletePost}
            />
            <Ruler direction='horizontal' />
            <PostReactions post={post as AggregatedPostData} />
        </LoadingContainer>
    </Column>;
}
