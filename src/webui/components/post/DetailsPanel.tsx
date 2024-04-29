
import type PostView from '^/domain/post/view/PostView';

import { Column, Panel } from '^/webui/designsystem/module';

import RelationView from '^/domain/relation/view/RelationView';
import ComicImage from '../comic/Image';
import RatingEngagement from '../rating/Engagement';
import TimeElapsed from '../relation/TimeElapsed';

export type Props = {
    post: PostView;
    followHandler: () => Promise<void>;
    rateHandler: () => Promise<boolean>;
    editHandler: (relation: RelationView) => void;
};

export default function Component({ post, followHandler, rateHandler, editHandler }: Props)
{
    return <Panel>
        <Column gap='medium' alignX='stretch'>
            <TimeElapsed date={post.createdAt} relation={post.creator} followHandler={followHandler} editHandler={editHandler} />
            <ComicImage comic={post.comic} />
            <RatingEngagement isEngaged={post.hasRated} count={post.ratingCount} rateHandler={rateHandler} />
        </Column>
    </Panel>;
}
