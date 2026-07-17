
import { Outlet } from 'react-router-dom';

import { Column, Ruler } from '@maskingtech/designsystem';

import type { Post } from '^/domain/post';

import { BackRow, LoadingAndResultContainer } from '~/components/common';
import { useViewProfile } from '~/components/profile';
import { useToggle } from '~/components/rating';
import { useEstablish } from '~/components/relation';

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
            <BackRow canGoBack={post?.hasParent as boolean} onBackClick={() => goToParentPost(post as Post)} />
            <LoadingAndResultContainer data={post} isLoading={isLoading}>
                <DetailsPanel
                    post={post as Post}
                    onFollowClick={establishRelation}
                    onRatingClick={togglePostRating}
                    onCreatorClick={viewProfile}
                    onReactionClick={viewPostDetails}
                    onDeleteClick={confirmPostRemoval}
                />
                <Ruler direction='horizontal' />
                <Reactions post={post as Post} />
            </LoadingAndResultContainer>
        </Column>
        <Outlet />
    </>;
}
