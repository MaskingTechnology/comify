
import { useCallback } from 'react';

import type { AggregatedData as AggregatedPostData } from '^/domain/post/aggregate';

import { ConfirmationPanel, LoadingContainer, PostDetailsPanel, PostLargePanel, SingleReactionRow } from '^/webui/components';
import { useAppContext } from '^/webui/contexts';
import { Column, Ruler } from '^/webui/designsystem';

import CreatePostReport from './CreatePostReport';
import useEstablishRelation from './hooks/useEstablishRelation';
import useHighlightReaction from './hooks/useHighlight';
import usePost from './hooks/usePost';
import useRemovePost from './hooks/useRemovePost';
import useTogglePostRating from './hooks/useTogglePostRating';
import useViewPostDetails from './hooks/useViewPostDetails';
import useViewProfile from './hooks/useViewProfile';

export default function Feature()
{
    const { showModal, closeModal } = useAppContext();

    const establishRelation = useEstablishRelation();
    const togglePostRating = useTogglePostRating();
    const viewProfile = useViewProfile();
    const removePost = useRemovePost();
    const viewPostDetails = useViewPostDetails();

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

    const createReport = useCallback(async (post: AggregatedPostData) =>
    {
        const content = <CreatePostReport
            post={post}
            selected={'scam'}
            handleDone={(reportId?: string) => { closeModal(); console.log(reportId); }}
        />;

        showModal(content);

    }, [closeModal, showModal]);

    return <Column gap='medium' alignX='stretch'>
        <LoadingContainer data={post}>
            <PostDetailsPanel
                post={post as AggregatedPostData}
                onFollowClick={establishRelation}
                onRatingClick={togglePostRating}
                onCreatorClick={viewProfile}
                onDeleteClick={deletePost}
                onReactionClick={viewPostDetails}
                onReportClick={createReport}
            />
        </LoadingContainer>
        <Ruler direction='horizontal' />
        <SingleReactionRow onShowClick={() => viewPostDetails(post as AggregatedPostData)} />
        <LoadingContainer data={(highlight)}>
            <PostLargePanel
                key={highlight?.id}
                post={highlight as AggregatedPostData}
                onFollowClick={establishRelation}
                onCreatorClick={viewProfile}
                onRatingClick={togglePostRating}
                onContentClick={viewPostDetails}
                onReactionClick={viewPostDetails}
            />
        </LoadingContainer>
    </Column>;
}
