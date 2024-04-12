
import { useEffect, useState } from 'react';
import johnDoe from '../../../domain/authentication/johnDoe';
import type PostView from '../../../domain/post/view/PostView';
import getReactionsByPost from '../../../domain/reaction/getByPost';
import ReactionView from '../../../domain/reaction/view/ReactionView';
import { Column, Panel, Ruler } from '../../designsystem/module';
import awaitData from '../../utils/awaitData';
import ComicImage from '../comic/Image';
import OrderAndSearchAdd from '../common/OrderAndAddRow';
import RatingEngagement from '../rating/Engagement';
import ReactionsList from '../reaction/PanelList';
import TimeElapsed from '../relation/TimeElapsed';

export type Props = {
    post: PostView;
    followHandler: () => Promise<void>;
    rateHandler: () => Promise<boolean>;
};

export default function Component({ post, followHandler, rateHandler }: Props)
{
    const [reactions, setReactions] = useState<ReactionView[] | undefined>(undefined);

    if (post === undefined) return null;

    const getReactions = () => getReactionsByPost(johnDoe, post.id);

    useEffect(() => awaitData(getReactions, setReactions), []);

    return <Column gap='medium' alignX='stretch'>
        <Panel>
            <Column gap='medium' alignX='stretch'>
                <TimeElapsed date={post.createdAt} relation={post.creator} followHandler={followHandler} />
                <ComicImage comic={post.comic} />
                <RatingEngagement isEngaged={post.hasRated} count={post.ratingCount} rateHandler={rateHandler} />
            </Column>
        </Panel>
        <Ruler type='horizontal' />
        <OrderAndSearchAdd selected='recent' postId={post.id} />
        <ReactionsList reactions={reactions} />
    </Column>;
}
