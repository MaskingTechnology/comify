
import type PostView from '^/domain/post/view/PostView';
import type RelationView from '^/domain/relation/view/RelationView';

import { ClickArea, Column, Panel } from '^/webui/designsystem/module';

import ComicImage from '../comic/Image';
import TimeElapsed from '../relation/TimeElapsed';
import EngagementsRow from './elementary/EngagementRow';

export type Props = {
    post: PostView;
    onFollowClick: (relation: RelationView) => Promise<void>;
    onCreatorClick: (relation: RelationView) => void;
    onComicClick: (post: PostView) => void;
    onRatingClick: (post: PostView) => Promise<boolean>;
    onReactionClick: (post: PostView) => void;
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
