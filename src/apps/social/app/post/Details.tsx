
import { Outlet } from 'react-router-dom';

import { Column, Ruler } from '@maskingtech/designsystem';

import type { AggregatedData as AggregatedPostData } from '^/domain/post/aggregate';

import { BackRow, LoadingAndResultContainer } from '~/app/common';
import { useViewProfile } from '~/app/profile';
import { useToggle } from '~/app/rating';
import { useEstablish } from '~/app/relation';

import DetailsPanel from './components/DetailsPanel';

import useGoToParentPost from './hooks/useGoToParentPost';
import usePost from './hooks/usePost';
import useConfirmPostRemoval from './hooks/useConfirmPostRemoval';
import useViewPostDetails from './hooks/useViewPostDetails';

import Reactions from './Reactions';

export default function Feature()
{
    const goToParentPost = useGoToParentPost();
    const establishRelation = useEstablish();
    const togglePostRating = useToggle();
    const viewProfile = useViewProfile();
    const confirmPostRemoval = useConfirmPostRemoval();
    const viewPostDetails = useViewPostDetails();

    const [post, isLoading] = usePost();

    return <>
        <Column gap='medium' alignX='stretch'>
            <BackRow canGoBack={post?.hasParent as boolean} onBackClick={() => goToParentPost(post as AggregatedPostData)} />
            <LoadingAndResultContainer data={post} isLoading={isLoading}>
                <DetailsPanel
                    post={post as AggregatedPostData}
                    onFollowClick={establishRelation}
                    onRatingClick={togglePostRating}
                    onCreatorClick={viewProfile}
                    onReactionClick={viewPostDetails}
                    onDeleteClick={confirmPostRemoval}
                />
                <Ruler direction='horizontal' />
                <Reactions post={post as AggregatedPostData} />
            </LoadingAndResultContainer>
        </Column>
        <Outlet />
    </>;
}
