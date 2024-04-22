
import type PostView from '../../../domain/post/view/PostView';
import { Column, Panel } from '../../designsystem/module';
import ComicImage from '../comic/Image';
import RatingEngagement from '../rating/Engagement';
import TimeElapsed from '../relation/TimeElapsed';

export type Props = {
    post: PostView;
    followHandler: () => Promise<void>;
    rateHandler: () => Promise<boolean>;
};

export default function Component({ post, followHandler, rateHandler }: Props)
{
    return <Panel>
        <Column gap='medium' alignX='stretch'>
            <TimeElapsed date={post.createdAt} relation={post.creator} followHandler={followHandler} />
            <ComicImage comic={post.comic} />
            <RatingEngagement isEngaged={post.hasRated} count={post.ratingCount} rateHandler={rateHandler} />
        </Column>
    </Panel>;
}
