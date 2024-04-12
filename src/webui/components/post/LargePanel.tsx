
import type PostView from '../../../domain/post/view/PostView';
import { ClickArea, Column, Panel } from '../../designsystem/module';
import ComicImage from '../comic/Image';
import TimeElapsed from '../relation/TimeElapsed';
import EngagementsRow from './elementary/EngagementRow';

export type Props = {
    post: PostView;
    comicHandler: () => void;
    followHandler: () => Promise<void>;
    rateHandler: () => Promise<boolean>;
    reactionHandler: () => void;
};

export default function Component({ post, comicHandler, followHandler, rateHandler, reactionHandler }: Props)
{
    const handleClick = () =>
    {
        comicHandler();
    };

    return <Panel>
        <Column gap='medium' alignX='stretch'>
            <TimeElapsed date={post.createdAt} relation={post.creator} followHandler={followHandler} />
            <ClickArea clickHandler={handleClick}>
                <ComicImage comic={post.comic} />
            </ClickArea>
            <EngagementsRow isRated={post.hasRated} ratingCount={post.ratingCount} reactionCount={post.reactionCount} rateHandler={rateHandler} reactionHandler={reactionHandler} />
        </Column>
    </Panel>;
}
