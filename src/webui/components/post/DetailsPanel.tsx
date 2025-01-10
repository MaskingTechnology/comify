
import type { AggregatedData as AggregatedPostData } from '^/domain/post/aggregate';
import type { AggregatedData as AggregatedRelationData } from '^/domain/relation/aggregate';

import { Column, Panel, Row } from '^/webui/designsystem';

import ComicImage from '../comic/Image';
import RatingEngagement from '../rating/Engagement';
import TimeElapsed from '../relation/TimeElapsed';
import DeleteButton from './DeleteButton';

type Props = {
    readonly post: AggregatedPostData;
    readonly onFollowClick: (relation: AggregatedRelationData) => Promise<void>;
    readonly onCreatorClick: (relation: AggregatedRelationData) => void;
    readonly onRatingClick: (post: AggregatedPostData) => Promise<boolean>;
    readonly onDeleteClick: (post: AggregatedPostData) => Promise<void>;
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
