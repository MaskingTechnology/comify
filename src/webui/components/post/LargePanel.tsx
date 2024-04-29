
import type PostView from '^/domain/post/view/PostView';

import { ClickArea, Column, Panel } from '^/webui/designsystem/module';

import ComicImage from '../comic/Image';
import TimeElapsed from '../relation/TimeElapsed';
import EngagementsRow from './elementary/EngagementRow';

export type Props = {
    post: PostView;
    followHandler: () => Promise<void>;
    rateHandler: () => Promise<boolean>;
    detailsHandler: () => void;
    editHandler: () => void;
};

export default function Component({ post, followHandler, rateHandler, detailsHandler, editHandler }: Props)
{
    return <Panel>
        <Column gap='medium' alignX='stretch'>
            <TimeElapsed date={post.createdAt} relation={post.creator} followHandler={followHandler} editHandler={editHandler} />
            <ClickArea clickHandler={detailsHandler}>
                <ComicImage comic={post.comic} />
            </ClickArea>
            <EngagementsRow isRated={post.hasRated} ratingCount={post.ratingCount} reactionCount={post.reactionCount} rateHandler={rateHandler} reactionHandler={detailsHandler} />
        </Column>
    </Panel>;
}
