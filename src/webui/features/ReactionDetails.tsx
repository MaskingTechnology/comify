
// import { useCallback } from 'react';

// import type { AggregatedData as AggregatedReactionData } from '^/domain/post/aggregate';

// import { ConfirmationPanel, LoadingContainer, ReactionDetailsPanel } from '^/webui/components';
// import { useAppContext } from '^/webui/contexts';
// import { Column, Ruler } from '^/webui/designsystem';

// import useEstablishRelation from './hooks/useEstablishRelation';
// import useGoBack from './hooks/useGoBack';
// import useReaction from './hooks/useReaction';
// import useRemoveReaction from './hooks/useRemoveReaction';
// import useToggleReactionRating from './hooks/useToggleReactionRating';
// import useViewProfile from './hooks/useViewProfile';
// import useViewReactionDetails from './hooks/useViewReactionDetails';

// import BackRow from '../components/common/BackRow';
// import ReactionReactions from './ReactionReactions';

// export default function Feature()
// {
//     const { showModal, closeModal } = useAppContext();

//     const establishRelation = useEstablishRelation();
//     const toggleReactionRating = useToggleReactionRating();
//     const viewProfile = useViewProfile();
//     const viewReactionDetails = useViewReactionDetails();
//     const removeReaction = useRemoveReaction();
//     const goBack = useGoBack();

//     const [reaction] = useReaction();

//     const deleteReaction = useCallback(async (reaction: AggregatedReactionData) =>
//     {
//         const panel = <ConfirmationPanel
//             message='Are you sure you want to delete this reaction?'
//             onConfirm={() => { closeModal(); removeReaction(reaction); }}
//             onCancel={() => closeModal()} />;

//         showModal(panel);

//     }, [showModal, closeModal, removeReaction]);

//     return <Column gap='medium' alignX='stretch'>
//         <BackRow onClick={() => goBack(reaction as AggregatedReactionData)} />
//         <LoadingContainer data={reaction}>
//             <ReactionDetailsPanel
//                 reaction={reaction as AggregatedReactionData}
//                 onFollowClick={establishRelation}
//                 onRatingClick={toggleReactionRating}
//                 onCreatorClick={viewProfile}
//                 onReactionClick={viewReactionDetails}
//                 onDeleteClick={deleteReaction}
//             />
//             <Ruler direction='horizontal' />
//             <ReactionReactions reaction={reaction as AggregatedReactionData} />
//         </LoadingContainer>
//     </Column>;
// }
