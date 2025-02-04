
import { useCallback } from 'react';

import type { AggregatedData as AggregatedPostData } from '^/domain/post/aggregate';
import type { AggregatedData as AggregatedReactionData } from '^/domain/reaction/aggregate';

import { ConfirmationPanel, LoadingContainer, PostDetailsPanel, ReactionLargePanel, SingleReactionRow } from '../components';
import { useAppContext } from '../contexts';
import { Column, Ruler } from '../designsystem';

import useEstablishRelation from './hooks/useEstablishRelation';
import useHighlightReaction from './hooks/useHighlight';
import usePost from './hooks/usePost';
import useRemovePost from './hooks/useRemovePost';
import useRemoveReaction from './hooks/useRemoveReaction';
import useTogglePostRating from './hooks/useTogglePostRating';
import useToggleReactionRating from './hooks/useToggleReactionRating';
import useViewPostDetails from './hooks/useViewPostDetails';
import useViewProfile from './hooks/useViewProfile';
import useViewReactionDetails from './hooks/useViewReactionDetails';

export default function Feature()
{
    const { showModal, closeModal } = useAppContext();

    const establishRelation = useEstablishRelation();
    const togglePostRating = useTogglePostRating();
    const toggleReactionRating = useToggleReactionRating();
    const viewProfile = useViewProfile();
    const removePost = useRemovePost();
    const removeHighlight = useRemoveReaction();
    const viewPostDetails = useViewPostDetails();
    const viewReactionDetails = useViewReactionDetails();

    const [post] = usePost();
    const [highlight] = useHighlightReaction();

    const deletePost = useCallback(async (post: AggregatedPostData) =>
    {
        const panel = <ConfirmationPanel
            message='Are you sure you want to delete this post?'
            onConfirm={() => { closeModal(); removePost(post); }}
            onCancel={() => closeModal()} />;

        showModal(panel);

    }, [showModal, closeModal, removePost]);

    const deleteHighlight = useCallback(async (highlight: AggregatedReactionData) =>
    {
        const panel = <ConfirmationPanel
            message='Are you sure you want to delete this reaction?'
            onConfirm={() => { closeModal(); removeHighlight(highlight); }}
            onCancel={() => closeModal()} />;

        showModal(panel);

    }, [showModal, closeModal, removeHighlight]);

    return <Column gap='medium' alignX='stretch'>
        <LoadingContainer data={post}>
            <PostDetailsPanel
                post={post as AggregatedPostData}
                onFollowClick={establishRelation}
                onRatingClick={togglePostRating}
                onCreatorClick={viewProfile}
                onDeleteClick={deletePost}
                onReactionClick={viewPostDetails}
            />
        </LoadingContainer>
        <Ruler direction='horizontal' />
        <SingleReactionRow onShowClick={() => viewPostDetails(post as AggregatedPostData)} />
        <LoadingContainer data={(highlight)}>
            <ReactionLargePanel
                key={highlight?.id}
                reaction={highlight as AggregatedReactionData}
                onFollowClick={establishRelation}
                onCreatorClick={viewProfile}
                onRatingClick={toggleReactionRating}
                onDeleteClick={deleteHighlight}
                onReactionClick={viewReactionDetails}
            />
        </LoadingContainer>
    </Column>;
}
