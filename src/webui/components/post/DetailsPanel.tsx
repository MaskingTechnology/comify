
import type PostView from '^/domain/post/view/PostView';
import type RelationView from '^/domain/relation/view/RelationView';

import { Column, Panel } from '^/webui/designsystem/module';

import ComicImage from '../comic/Image';
import RatingEngagement from '../rating/Engagement';
import TimeElapsed from '../relation/TimeElapsed';

export type Props = {
    post: PostView;
    followHandler: (relation: RelationView) => Promise<void>;
    rateHandler: (post: PostView) => Promise<boolean>;
    profileHandler: (relation: RelationView) => void;
    editHandler: (relation: RelationView) => void;
};

export default function Component({ post, followHandler, rateHandler, profileHandler, editHandler }: Props)
{
    return <Panel>
        <Column gap='medium' alignX='stretch'>
            <TimeElapsed
                date={post.createdAt}
                relation={post.creator}
                followHandler={() => followHandler(post.creator)}
                profileHandler={() => profileHandler(post.creator)}
                editHandler={() => editHandler(post.creator)}
            />
            <ComicImage comic={post.comic} />
            <RatingEngagement
                isEngaged={post.hasRated}
                count={post.ratingCount}
                rateHandler={() => rateHandler(post)}
            />
        </Column>
    </Panel>;
}
