
import type { AggregatedData as PostView } from '^/domain/post/aggregate/types';
import type { AggregatedData as RelationView } from '^/domain/relation/aggregate/types';

import { Column, Panel, Row } from '^/webui/designsystem';

import ComicImage from '../comic/Image';
import RatingEngagement from '../rating/Engagement';
import TimeElapsed from '../relation/TimeElapsed';
import DeleteButton from './DeleteButton';

type Props = {
    readonly post: PostView;
    readonly onFollowClick: (relation: RelationView) => Promise<void>;
    readonly onCreatorClick: (relation: RelationView) => void;
    readonly onRatingClick: (post: PostView) => Promise<boolean>;
    readonly onDeleteClick: (post: PostView) => Promise<void>;
};

export default function Component({ post, onFollowClick, onCreatorClick, onRatingClick, onDeleteClick }: Props)
{
    return <Panel padding='medium'>
        <Column gap='medium' alignX='stretch'>
            <TimeElapsed
                date={post.createdAt}
                relation={post.creator}
                onFollowClick={() => onFollowClick(post.creator)}
                onCreatorClick={() => onCreatorClick(post.creator)}
            />
            <ComicImage comic={post.comic} />
            <Row alignX='justify'>
                <RatingEngagement
                    isEngaged={post.hasRated}
                    count={post.ratingCount}
                    onClick={() => onRatingClick(post)}
                />
                {
                    post.creator.self
                        ? <DeleteButton onClick={() => onDeleteClick(post)} />
                        : null
                }
            </Row>
        </Column>
    </Panel>;
}
