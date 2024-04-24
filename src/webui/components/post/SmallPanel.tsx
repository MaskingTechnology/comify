
import type PostView from '^/domain/post/view/PostView';

import { ClickArea, Column, Panel, Row } from '^/webui/designsystem/module';

import Comic from '../comic/Image';
import TimeElapsed from '../common/TimeElapsed';
import EngagementsRow from './elementary/EngagementRow';

export type Props = {
    post: PostView;
    comicHandler: () => void;
    rateHandler: () => Promise<boolean>;
    reactionHandler: () => void;
};

export default function Component({ post, comicHandler, rateHandler, reactionHandler }: Props)
{
    return <Panel padding='small'>
        <Column gap='small' alignX='stretch'>
            <ClickArea clickHandler={comicHandler}>
                <Comic comic={post.comic} />
            </ClickArea>
            <Row alignX='justify'>
                <EngagementsRow isRated={post.hasRated} ratingCount={post.ratingCount} reactionCount={post.reactionCount} rateHandler={rateHandler} reactionHandler={reactionHandler} />
                <TimeElapsed date={post.createdAt} />
            </Row>
        </Column>
    </Panel>;
}
