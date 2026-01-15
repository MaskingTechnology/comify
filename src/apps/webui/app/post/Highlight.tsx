
import { Column, Ruler } from '@maskingtech/designsystem';

import type { AggregatedData as AggregatedPostData } from '^/domain/post/aggregate';

import { LoadingAndResultContainer } from '~/app/common';
import { useViewProfile } from '~/app/profile';
import { useToggle } from '~/app/rating';
import { SingleReactionRow } from '~/app/reaction';
import { useEstablish } from '~/app/relation';

import DetailsPanel from './components/DetailsPanel';
import LargePanel from './components/LargePanel';

import useHighlightReaction from './hooks/useHighlight';
import usePost from './hooks/usePost';
import useRemovePost from './hooks/useRemovePost';
import useViewPostDetails from './hooks/useViewPostDetails';

export default function Feature()
{
    const establishRelation = useEstablish();
    const togglePostRating = useToggle();
    const viewProfile = useViewProfile();
    const removePost = useRemovePost();
    const viewPostDetails = useViewPostDetails();

    const [post, isPostLoading] = usePost();
    const [highlight, isHighlightLoading] = useHighlightReaction();

    return <Column gap='medium' alignX='stretch'>
        <LoadingAndResultContainer data={post} isLoading={isPostLoading}>
            <DetailsPanel
                post={post as AggregatedPostData}
                onFollowClick={establishRelation}
                onRatingClick={togglePostRating}
                onCreatorClick={viewProfile}
                onDeleteClick={removePost}
                onReactionClick={viewPostDetails}
            />
        </LoadingAndResultContainer>
        <Ruler direction='horizontal' />
        <SingleReactionRow onShowClick={() => viewPostDetails(post as AggregatedPostData)} />
        <LoadingAndResultContainer data={(highlight)} isLoading={isHighlightLoading}>
            <LargePanel
                key={highlight?.id}
                post={highlight as AggregatedPostData}
                onFollowClick={establishRelation}
                onCreatorClick={viewProfile}
                onRatingClick={togglePostRating}
                onContentClick={viewPostDetails}
                onReactionClick={viewPostDetails}
            />
        </LoadingAndResultContainer>
    </Column>;
}
