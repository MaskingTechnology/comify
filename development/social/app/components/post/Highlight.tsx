
import { Outlet } from 'react-router-dom';

import { Column, Ruler } from '@maskingtech/designsystem';

import type { Post } from '^/domain/post';

import { LoadingAndResultContainer } from '~/components/common';
import { useViewProfile } from '~/components/creator.profile';
import { useToggle } from '~/components/post.rating';
import { SingleReactionRow } from '~/components/post.reaction';
import { useEstablish } from '~/components/relation';

import DetailsPanel from './components/DetailsPanel';
import LargePanel from './components/LargePanel';

import useHighlightReaction from './hooks/useHighlight';
import usePost from './hooks/usePost';
import useConfirmPostRemoval from './hooks/useConfirmPostRemoval';
import useViewPostDetails from './hooks/useViewPostDetails';

export default function Feature()
{
    const establishRelation = useEstablish();
    const togglePostRating = useToggle();
    const viewProfile = useViewProfile();
    const removePost = useConfirmPostRemoval();
    const viewPostDetails = useViewPostDetails();

    const [post, isPostLoading] = usePost();
    const [highlight, isHighlightLoading] = useHighlightReaction();

    return <>
        <Column gap='medium' alignX='stretch'>
            <LoadingAndResultContainer data={post} isLoading={isPostLoading}>
                <DetailsPanel
                    post={post as Post}
                    onFollowClick={establishRelation}
                    onRatingClick={togglePostRating}
                    onCreatorClick={viewProfile}
                    onDeleteClick={removePost}
                    onReactionClick={viewPostDetails}
                />
            </LoadingAndResultContainer>
            <Ruler direction='horizontal' />
            <SingleReactionRow onShowClick={() => viewPostDetails(post as Post)} />
            <LoadingAndResultContainer data={(highlight)} isLoading={isHighlightLoading}>
                <LargePanel
                    key={highlight?.id}
                    post={highlight as Post}
                    onFollowClick={establishRelation}
                    onCreatorClick={viewProfile}
                    onRatingClick={togglePostRating}
                    onContentClick={viewPostDetails}
                    onReactionClick={viewPostDetails}
                />
            </LoadingAndResultContainer>
        </Column>
        <Outlet />
    </>;
}
