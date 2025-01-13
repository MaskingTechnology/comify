
import { useCallback } from 'react';

import type { AggregatedData as ReactionView } from '^/domain/reaction/aggregate/types';

import { ConfirmationPanel, LoadingContainer, ReactionDetailsPanel } from '^/webui/components';
import { useAppContext } from '^/webui/contexts';
import { Column, Ruler } from '^/webui/designsystem';

import useEstablishRelation from './hooks/useEstablishRelation';
import useReaction from './hooks/useReaction';
import useRemoveReaction from './hooks/useRemoveReaction';
import useToggleReactionRating from './hooks/useToggleReactionRating';
import useViewProfile from './hooks/useViewProfile';
import useViewReactionDetails from './hooks/useViewReactionDetails';

import useGoBack from './hooks/useGoBack';

import BackRow from '../components/common/BackRow';
import ReactionReactions from './ReactionReactions';

export default function Feature()
{
    const { showModal, closeModal } = useAppContext();

    const establishRelation = useEstablishRelation();
    const toggleReactionRating = useToggleReactionRating();
    const viewProfile = useViewProfile();
    const viewReactionDetails = useViewReactionDetails();
    const removeReaction = useRemoveReaction();
    const goBack = useGoBack();

    const [reaction] = useReaction();

    const deleteReaction = useCallback(async (reaction: ReactionView) =>
    {
        const panel = <ConfirmationPanel
            message='Are you sure you want to delete this reaction?'
            onConfirm={() => { closeModal(); removeReaction(reaction); }}
            onCancel={() => closeModal()} />;

        showModal(panel);

    }, [showModal, closeModal, removeReaction]);

    return <Column gap='medium' alignX='stretch'>
        <BackRow onClick={() => goBack(reaction as ReactionView)} />
        <LoadingContainer data={reaction}>
            <ReactionDetailsPanel
                reaction={reaction as ReactionView}
                onFollowClick={establishRelation}
                onRatingClick={toggleReactionRating}
                onCreatorClick={viewProfile}
                onReactionClick={viewReactionDetails}
                onDeleteClick={deleteReaction}
            />
            <Ruler direction='horizontal' />
            <ReactionReactions reaction={reaction as ReactionView} />
        </LoadingContainer>
    </Column>;
}
