
import type PostView from '../../../domain/post/view/PostView';
import { Column, Panel } from '../../designsystem/module';
import ComicImage from '../comic/Image';
import TimeElapsed from '../relation/TimeElapsed';
import EngagementsRow from './elementary/EngagementRow';

export type Props = {
    post: PostView;
    followHandler: () => Promise<void>;
    rateHandler: () => Promise<boolean>;
    profileHandler: () => void;
};

export default function Component({ post, followHandler, rateHandler, profileHandler }: Props)
{
    return <Panel>
        <Column gap='medium' alignX='stretch'>
            <TimeElapsed date={post.createdAt} relation={post.creator} followHandler={followHandler} profileHandler={profileHandler} />
            <ComicImage comic={post.comic} />
            <EngagementsRow isRated={post.hasRated} ratingCount={post.ratingCount} reactionCount={post.reactionCount} rateHandler={rateHandler} />
        </Column>
    </Panel>;
}
