
import type RelationView from '^/domain/relation/view/RelationView';

import CreatorTimeElapsed from '../creator/TimeElapsed';
import FollowRow from './elementary/FollowRow';

export type Props = {
    relation: RelationView;
    date: Date;
    followHandler: () => Promise<void>;
    profileHandler: (relation: RelationView) => void;
    editHandler?: (relation: RelationView) => void;
};

export default function Component({ relation, date, followHandler, profileHandler, editHandler }: Props)
{
    return <FollowRow
        isFollowing={relation.exists}
        isSelf={relation.self}
        followHandler={followHandler}
        editHandler={editHandler !== undefined ? () => editHandler(relation) : undefined}
    >

        <CreatorTimeElapsed
            creator={relation.following}
            date={date}
            profileHandler={() => profileHandler(relation)}
        />

    </FollowRow>;
}
