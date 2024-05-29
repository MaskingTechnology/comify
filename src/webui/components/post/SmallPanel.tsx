
import type { AggregatedData as PostView } from '^/domain/post/aggregate/types';

import { ClickArea, Column, Panel, Row } from '^/webui/designsystem';

import Comic from '../comic/Image';
import TimeElapsed from '../common/TimeElapsed';
import EngagementsRow from './elementary/EngagementRow';

type Props = {
    readonly post: PostView;
    readonly onComicClick: () => void;
    readonly onRatingClick: () => Promise<boolean>;
    readonly onReactionClick: () => void;
};

export default function Component({ post, onComicClick, onRatingClick, onReactionClick }: Props)
{
    return <Panel padding='small'>
        <Column gap='small' alignX='stretch'>
            <ClickArea onClick={onComicClick}>
                <Comic comic={post.comic} />
            </ClickArea>
            <Row alignX='justify'>
                <EngagementsRow
                    isRated={post.hasRated}
                    ratingCount={post.ratingCount}
                    reactionCount={post.reactionCount}
                    onRatingClick={onRatingClick}
                    onReactionClick={onReactionClick}
                />
                <TimeElapsed date={post.createdAt} />
            </Row>
        </Column>
    </Panel>;
}
