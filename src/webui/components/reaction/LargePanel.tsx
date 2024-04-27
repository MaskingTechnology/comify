
import johnDoe from '^/domain/authentication/johnDoe';
import type CreatorView from '^/domain/creator/view/CreatorView';
import toggleRating from '^/domain/reaction/toggleRating';
import ReactionView from '^/domain/reaction/view/ReactionView';

import Image from '^/webui/components/comic/Image';
import { Column, Panel, Row } from '^/webui/designsystem/module';

import Comment from '../comment/Comment';
import RatingEngagement from '../rating/Engagement';
import TimeElapsed from '../relation/TimeElapsed';
import Delete from './Delete';

export type Props = {
    identity?: CreatorView | undefined;
    reaction: ReactionView;
    followHandler: () => Promise<void>;
    profileHandler: () => void;
    deleteHandler: (reaction: ReactionView) => Promise<void>;
};

export default function LargePanel({ identity, reaction, followHandler, profileHandler, deleteHandler }: Props)
{
    const handleRate = () =>
    {
        return toggleRating(johnDoe, reaction.id);
    };

    const handleDelete = async () =>
    {
        await deleteHandler(reaction);
    };

    return <Panel>
        <Column gap='medium' alignX='stretch'>
            <TimeElapsed date={reaction.createdAt} relation={reaction.relation} followHandler={followHandler} profileHandler={profileHandler} />
            {
                reaction.comment !== undefined
                    ? <Comment text={reaction.comment.message} />
                    : null
            }
            {
                reaction.comic !== undefined
                    ? <Image comic={reaction.comic} />
                    : null
            }
            <Row alignX='justify'>
                <RatingEngagement isEngaged={reaction.hasRated} count={reaction.ratingCount} rateHandler={handleRate} />
                {
                    identity?.id === reaction.relation.creator.id
                        ? <Delete deleteHandler={handleDelete} />
                        : null
                }
            </Row>
        </Column>
    </Panel>;
}
