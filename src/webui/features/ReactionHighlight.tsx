
import { useCallback } from 'react';

import type { AggregatedData as ReactionView } from '^/domain/reaction/aggregate/types';

import { ConfirmationPanel, LoadingContainer, ReactionDetailsPanel, ReactionLargePanel, SingleReactionRow } from '../components';
import { useAppContext } from '../contexts';
import { Column, Ruler } from '../designsystem';

import useEstablishRelation from './hooks/useEstablishRelation';
import useHighlight from './hooks/useHighlight';
import useReaction from './hooks/useReaction';
import useRemoveReaction from './hooks/useRemoveReaction';
import useToggleReactionRating from './hooks/useToggleReactionRating';
import useViewProfile from './hooks/useViewProfile';
import useViewReactionDetails from './hooks/useViewReactionDetails';

export default function Feature()
{
    const { showModal, closeModal } = useAppContext();

    const establishRelation = useEstablishRelation();
    const toggleReactionRating = useToggleReactionRating();
    const viewProfile = useViewProfile();
    const removeReaction = useRemoveReaction();
    const removeHighlight = useRemoveReaction();
    const viewReactionDetails = useViewReactionDetails();

    const [reaction] = useReaction();
    const [highlight] = useHighlight();

    const deleteReaction = useCallback(async (reaction: ReactionView) =>
    {
        const panel = <ConfirmationPanel
            message='Are you sure you want to delete this reaction?'
            onConfirm={() => { closeModal(); removeReaction(reaction); }}
            onCancel={() => closeModal()} />;

        showModal(panel);

    }, [showModal, closeModal, removeReaction]);

    const deleteHighlight = useCallback(async (highlight: ReactionView) =>
    {
        const panel = <ConfirmationPanel
            message='Are you sure you want to delete this reaction?'
            onConfirm={() => { closeModal(); removeHighlight(highlight); }}
            onCancel={() => closeModal()} />;

        showModal(panel);

    }, [showModal, closeModal, removeHighlight]);

    return <Column gap='medium' alignX='stretch'>
        <LoadingContainer data={reaction}>
            <ReactionDetailsPanel
                reaction={reaction as ReactionView}
                onFollowClick={establishRelation}
                onRatingClick={toggleReactionRating}
                onCreatorClick={viewProfile}
                onDeleteClick={deleteReaction}
                onReactionClick={viewReactionDetails}
            />
        </LoadingContainer>
        <Ruler direction='horizontal' />
        <SingleReactionRow onShowClick={() => viewReactionDetails(reaction as ReactionView)} />
        <LoadingContainer data={(highlight)}>
            <ReactionLargePanel
                key={highlight?.id}
                reaction={highlight as ReactionView}
                onFollowClick={establishRelation}
                onCreatorClick={viewProfile}
                onRatingClick={toggleReactionRating}
                onDeleteClick={deleteHighlight}
                onReactionClick={viewReactionDetails}
            />
        </LoadingContainer>
    </Column>;
}
