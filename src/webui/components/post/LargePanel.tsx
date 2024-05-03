
import type PostView from '^/domain/post/view/PostView';
import type RelationView from '^/domain/relation/view/RelationView';

import { ClickArea, Column, Panel } from '^/webui/designsystem';

import ComicImage from '../comic/Image';
import TimeElapsed from '../relation/TimeElapsed';
import EngagementsRow from './elementary/EngagementRow';

type Props = {
    readonly post: PostView;
    readonly onFollowClick: (relation: RelationView) => Promise<void>;
    readonly onCreatorClick: (relation: RelationView) => void;
    readonly onComicClick: (post: PostView) => void;
    readonly onRatingClick: (post: PostView) => Promise<boolean>;
    readonly onReactionClick: (post: PostView) => void;
};

export default function Component({ post, onFollowClick, onCreatorClick, onComicClick, onRatingClick, onReactionClick }: Props)
{
    return <Panel>
        <Column gap='medium' alignX='stretch'>
            <TimeElapsed
                date={post.createdAt}
                relation={post.creator}
                onFollowClick={onFollowClick}
                onCreatorClick={onCreatorClick}
            />
            <ClickArea onClick={() => onComicClick(post)}>
                <ComicImage comic={post.comic} />
            </ClickArea>
            <EngagementsRow
                isRated={post.hasRated}
                ratingCount={post.ratingCount}
                reactionCount={post.reactionCount}
                onRatingClick={() => onRatingClick(post)}
                onReactionClick={() => onReactionClick(post)}
            />
        </Column>
    </Panel>;
}
