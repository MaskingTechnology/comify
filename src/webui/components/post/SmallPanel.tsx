
import type PostView from '^/domain/post/view/PostView';

import { ClickArea, Column, Panel, Row } from '^/webui/designsystem/module';

import Comic from '../comic/Image';
import TimeElapsed from '../common/TimeElapsed';
import EngagementsRow from './elementary/EngagementRow';

export type Props = {
    post: PostView;
    onComicClick: () => void;
    onRatingClick: () => Promise<boolean>;
    onReactionClick: () => void;
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
