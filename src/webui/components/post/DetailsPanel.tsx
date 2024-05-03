
import type PostView from '^/domain/post/view/PostView';
import type RelationView from '^/domain/relation/view/RelationView';

import { Column, Panel } from '^/webui/designsystem';

import ComicImage from '../comic/Image';
import RatingEngagement from '../rating/Engagement';
import TimeElapsed from '../relation/TimeElapsed';

export type Props = {
    readonly post: PostView;
    readonly onFollowClick: (relation: RelationView) => Promise<void>;
    readonly onCreatorClick: (relation: RelationView) => void;
    readonly onRatingClick: (post: PostView) => Promise<boolean>;
};

export default function Component({ post, onFollowClick, onCreatorClick, onRatingClick }: Props)
{
    return <Panel>
        <Column gap='medium' alignX='stretch'>
            <TimeElapsed
                date={post.createdAt}
                relation={post.creator}
                onFollowClick={() => onFollowClick(post.creator)}
                onCreatorClick={() => onCreatorClick(post.creator)}
            />
            <ComicImage comic={post.comic} />
            <RatingEngagement
                isEngaged={post.hasRated}
                count={post.ratingCount}
                onClick={() => onRatingClick(post)}
            />
        </Column>
    </Panel>;
}
