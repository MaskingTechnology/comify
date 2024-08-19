
import { useCallback } from 'react';

import type { AggregatedData as PostView } from '^/domain/post/aggregate/types';
import type { AggregatedData as ReactionView } from '^/domain/reaction/aggregate/types';

import { ConfirmationPanel, LoadingContainer, PostDetailsPanel, ReactionLargePanel, SingleReactionRow } from '../components';
import { useAppContext } from '../contexts';
import { Column, Ruler } from '../designsystem';
import useEstablishRelation from './hooks/useEstablishRelation';
import usePost from './hooks/usePost';
import useReaction from './hooks/useReaction';
import useRemovePost from './hooks/useRemovePost';
import useRemoveReaction from './hooks/useRemoveReaction';
import useTogglePostRating from './hooks/useTogglePostRating';
import useToggleReactionRating from './hooks/useToggleReactionRating';
import useViewPostDetails from './hooks/useViewPostDetails';
import useViewProfile from './hooks/useViewProfile';

export default function Feature()
{
    const { showModal, closeModal } = useAppContext();

    const establishRelation = useEstablishRelation();
    const togglePostRating = useTogglePostRating();
    const toggleReactionRating = useToggleReactionRating();
    const viewProfile = useViewProfile();
    const removePost = useRemovePost();
    const removeReaction = useRemoveReaction();
    const viewPost = useViewPostDetails();

    const [post] = usePost();
    const [reaction] = useReaction();

    const deletePost = useCallback(async (post: PostView) =>
    {
        const panel = <ConfirmationPanel
            message='Are you sure you want to delete this post?'
            onConfirm={() => { closeModal(); removePost(post); }}
            onCancel={() => closeModal()} />;

        showModal(panel);

    }, [showModal, closeModal, removePost]);

    const deleteReaction = useCallback(async (reaction: ReactionView) =>
    {
        const panel = <ConfirmationPanel
            message='Are you sure you want to delete this reaction?'
            onConfirm={() => { closeModal(); removeReaction(reaction); }}
            onCancel={() => closeModal()} />;

        showModal(panel);

    }, [showModal, closeModal, removeReaction]);

    return <Column gap='medium' alignX='stretch'>
        <LoadingContainer data={post}>
            <PostDetailsPanel
                post={post as PostView}
                onFollowClick={establishRelation}
                onRatingClick={togglePostRating}
                onCreatorClick={viewProfile}
                onDeleteClick={deletePost}
            />
        </LoadingContainer>
        <Ruler direction='horizontal' />
        <SingleReactionRow onPostClick={() => viewPost(post as PostView)} />
        <LoadingContainer data={(reaction)}>
            <ReactionLargePanel
                key={reaction?.id}
                reaction={reaction as ReactionView}
                onFollowClick={establishRelation}
                onCreatorClick={viewProfile}
                onRatingClick={toggleReactionRating}
                onDeleteClick={deleteReaction}
            />
        </LoadingContainer>
    </Column>;
}
